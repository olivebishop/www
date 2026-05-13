import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { workerEnvPick, workerEnvString } from "@/lib/worker-env"
import AdminNotificationEmail from "@/emails/admin-notification"
import ClientConfirmationEmail from "@/emails/client-confirmation"

const FROM_LINE = "Olive Bishop <hello@olivebishop.com>"
const DEFAULT_OWNER_INBOX = "hello@olivebishop.com"

function resendErrorMessage(err: unknown): string {
  if (err && typeof err === "object" && "message" in err && typeof (err as { message: unknown }).message === "string") {
    return (err as { message: string }).message
  }
  return String(err)
}

/** Lowercase mailbox inside `<…>` or bare `user@host`. */
function parseMailbox(from: string): string | null {
  const angle = from.match(/<([^>]+)>/)
  const raw = (angle?.[1] ?? from).trim().toLowerCase()
  return raw.includes("@") ? raw : null
}

export async function POST(request: NextRequest) {
  const apiKey = await workerEnvString("RESEND_API_KEY")
  if (!apiKey) {
    return NextResponse.json(
      {
        error: "Email is not configured",
        hint:
          "Add secret RESEND_API_KEY on Worker `www`, then redeploy. Optional: ADMIN_NOTIFY_EMAIL for owner alerts.",
      },
      { status: 503 },
    )
  }

  const extra = await workerEnvPick(["ADMIN_NOTIFY_EMAIL", "NOTIFICATION_EMAIL"])
  const configured =
    extra.ADMIN_NOTIFY_EMAIL?.trim() || extra.NOTIFICATION_EMAIL?.trim() || ""
  let adminTo = configured || DEFAULT_OWNER_INBOX

  const fromMailbox = parseMailbox(FROM_LINE)
  if (fromMailbox && adminTo.toLowerCase() === fromMailbox) {
    const [user, domain] = fromMailbox.split("@")
    if (user && domain) {
      adminTo = `${user}+project-enquiries@${domain}`
    }
  }

  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const name = body.name
  const email = body.email
  const project = body.project
  const projectType = body.projectType
  const budget = body.budget

  if (typeof name !== "string" || typeof email !== "string" || typeof project !== "string") {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }
  if (!name.trim() || !email.trim() || !project.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const resend = new Resend(apiKey)

  try {
    const { error: adminError } = await resend.emails.send({
      from: FROM_LINE,
      to: adminTo,
      replyTo: email,
      subject: `New Project Request from ${name}`,
      react: AdminNotificationEmail({
        name,
        email,
        project,
        projectType: typeof projectType === "string" ? projectType : undefined,
        budget: typeof budget === "string" ? budget : undefined,
      }),
    })

    if (adminError) {
      console.error("Error sending admin email:", adminError)
      return NextResponse.json(
        {
          error: "Failed to send email",
          reason: resendErrorMessage(adminError),
        },
        { status: 500 },
      )
    }

    const { error: clientError } = await resend.emails.send({
      from: FROM_LINE,
      to: email,
      subject: "Thanks for reaching out! I've received your project request",
      react: ClientConfirmationEmail({
        name,
        projectType: typeof projectType === "string" ? projectType : undefined,
        budget: typeof budget === "string" ? budget : undefined,
      }),
    })

    if (clientError) {
      console.error("Error sending confirmation email:", clientError)
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      {
        error: "Failed to send email",
        reason: error instanceof Error ? error.message : resendErrorMessage(error),
      },
      { status: 500 },
    )
  }
}
