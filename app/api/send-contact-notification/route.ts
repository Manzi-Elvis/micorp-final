import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const contactData = await request.json()

    console.log("Sending contact notification email for:", contactData.subject)

    // Validate required fields
    if (!contactData.first_name || !contactData.email || !contactData.subject) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send notification to admin
    await resend.emails.send({
      from: "noreply@micorp.pro",
      to: "habimanahirwa@gmail.com",
      subject: `New Contact Message: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Message</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${contactData.first_name} ${contactData.last_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3>Message:</h3>
            <p style="background: #fff; padding: 15px; border-left: 4px solid #007bff; white-space: pre-wrap;">${contactData.message}</p>
          </div>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin" 
               style="background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              View in Admin Panel
            </a>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending contact notification:", error)
    return NextResponse.json(
      {
        error: "Failed to send notification",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
