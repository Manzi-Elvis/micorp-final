import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const jobData = await request.json()
    
    console.log("Sending job notification email for:", jobData.project_title)
    
    // Validate required fields
    if (!jobData.client_name || !jobData.client_email || !jobData.project_title) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send notification to admin
    const adminEmailResult = await resend.emails.send({
      from: "noreply@micorp.pro",
      to: "habimanahirwa@gmail.com",
      subject: `New Job Request: ${jobData.project_title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Job Request Received</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Client:</strong> ${jobData.client_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${jobData.client_email}">${jobData.client_email}</a></p>
            <p><strong>Phone:</strong> ${jobData.client_phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${jobData.company_name || "Not provided"}</p>
            <p><strong>Project Title:</strong> ${jobData.project_title}</p>
            <p><strong>Project Type:</strong> ${jobData.project_type}</p>
            <p><strong>Budget Range:</strong> ${jobData.budget_range || "Not specified"}</p>
            <p><strong>Timeline:</strong> ${jobData.timeline || "Not specified"}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3>Description:</h3>
            <p style="background: #fff; padding: 15px; border-left: 4px solid #007bff;">${jobData.project_description}</p>
          </div>
          ${jobData.requirements ? `
            <div style="margin: 20px 0;">
              <h3>Requirements:</h3>
              <p style="background: #fff; padding: 15px; border-left: 4px solid #28a745;">${jobData.requirements}</p>
            </div>
          ` : ""}
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin" 
               style="background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              View in Admin Panel
            </a>
          </div>
        </div>
      `,
    })

    console.log("Admin email result:", adminEmailResult)

    // Send confirmation to client
    const clientEmailResult = await resend.emails.send({
      from: "noreply@micorp.pro",
      to: jobData.client_email,
      subject: "Job Request Received - Micorp",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #007bff, #0056b3); color: white; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">Thank you for your job request!</h2>
          </div>
          <div style="padding: 30px; background: #f8f9fa; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px;">Hi <strong>${jobData.client_name}</strong>,</p>
            <p>We've received your job request for "<strong>${jobData.project_title}</strong>" and our team will review it shortly.</p>
            <p>We'll get back to you within <strong>24-48 hours</strong> with either a proposal or questions about your project.</p>
            <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #28a745;">
              <h3 style="margin-top: 0; color: #333;">What happens next?</h3>
              <ul style="color: #666;">
                <li>Our team reviews your requirements</li>
                <li>We prepare a detailed proposal</li>
                <li>We'll contact you to discuss the project</li>
              </ul>
            </div>
            <p style="margin-top: 30px;">Best regards,<br><strong>The Micorp Team</strong></p>
          </div>
        </div>
      `,
    })

    console.log("Client email result:", clientEmailResult)

    return NextResponse.json({ 
      success: true, 
      adminEmailId: adminEmailResult.data?.id,
      clientEmailId: clientEmailResult.data?.id 
    })
  } catch (error) {
    console.error("Detailed error sending email:", error)
    return NextResponse.json({ 
      error: "Failed to send email", 
      details: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 })
  }
}
