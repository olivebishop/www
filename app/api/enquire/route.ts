import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import AdminNotificationEmail from "@/emails/admin-notification"
import ClientConfirmationEmail from "@/emails/client-confirmation"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, project, projectType, budget } = body

    // Validate required fields
    if (!name || !email || !project) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send notification email to admin
    const { error: adminError } = await resend.emails.send({
      from: "Olive Bishop <hello@olivebishop.com>",
      to: "olivehendrilgen1@gmail.com",
      subject: `New Project Request from ${name}`,
      react: AdminNotificationEmail({ name, email, project, projectType, budget }),
    })

    if (adminError) {
      console.error("Error sending admin email:", adminError)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    // Send confirmation email to client
    const { error: clientError } = await resend.emails.send({
      from: "Olive Bishop <hello@olivebishop.com>",
      to: email,
      subject: "Thanks for reaching out! I've received your project request",
      react: ClientConfirmationEmail({ name, projectType, budget }),
    })

    if (clientError) {
      console.error("Error sending confirmation email:", clientError)
      // Don't fail the whole request if only the confirmation fails
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
