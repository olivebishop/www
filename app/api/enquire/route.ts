import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import AdminNotificationEmail from "@/emails/admin-notification"
import ClientConfirmationEmail from "@/emails/client-confirmation"

function resendErrorMessage(err: unknown): string {
  if (err && typeof err === "object" && "message" in err && typeof (err as { message: unknown }).message === "string") {
    return (err as { message: string }).message
  }
  return String(err)
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  if (!apiKey) {
    return NextResponse.json(
      {
        error: "Email is not configured",
        hint: "In Cloudflare: Workers → www → Settings → Variables and Secrets → add secret RESEND_API_KEY (Resend dashboard → API Keys).",
      },
      { status: 503 },
    )
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
      from: "Olive Bishop <hello@olivebishop.com>",
      to: "hello@olivebishop.com",
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
      from: "Olive Bishop <hello@olivebishop.com>",
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
