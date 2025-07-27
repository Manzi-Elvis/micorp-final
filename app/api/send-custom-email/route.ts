import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { to, subject, message, isHtml = false } = await request.json()
    
    console.log("Sending custom email to:", to)
    
    // Validate required fields
    if (!to || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailContent = isHtml ? message : `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #007bff, #0056b3); color: white; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0;">Message from Micorp</h2>
        </div>
        <div style="padding: 30px; background: #f8f9fa; border-radius: 0 0 8px 8px;">
          <div style="background: white; padding: 20px; border-radius: 5px; white-space: pre-wrap; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p style="margin-top: 30px; color: #666;">Best regards,<br><strong>The Micorp Team</strong></p>
        </div>
      </div>
    `

    const result = await resend.emails.send({
      from: "noreply@micorp.pro",
      to: to,
      subject: subject,
      html: emailContent,
    })

    console.log("Custom email result:", result)

    return NextResponse.json({ 
      success: true, 
      emailId: result.data?.id 
    })
  } catch (error) {
    console.error("Error sending custom email:", error)
    return NextResponse.json({ 
      error: "Failed to send email", 
      details: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 })
  }
}
