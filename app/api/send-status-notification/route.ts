import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { jobData, newStatus, oldStatus } = await request.json()

    console.log(`Sending status change notification: ${oldStatus} -> ${newStatus}`)

    // Validate required fields
    if (!jobData || !newStatus) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const getStatusMessage = (status: string) => {
      switch (status) {
        case "accepted":
          return {
            subject: `Great News! Your Project "${jobData.project_title}" Has Been Accepted`,
            message: `
              <h2 style="color: #28a745;">Project Accepted! 🎉</h2>
              <p>Hi <strong>${jobData.client_name}</strong>,</p>
              <p>We're excited to let you know that we've accepted your project "<strong>${jobData.project_title}</strong>"!</p>
              <div style="background: #d4edda; border: 1px solid #c3e6cb; border-radius: 5px; padding: 15px; margin: 20px 0;">
                <h3 style="color: #155724; margin-top: 0;">What happens next?</h3>
                <ul style="color: #155724;">
                  <li>Our team will prepare a detailed project proposal</li>
                  <li>We'll schedule a call to discuss project details and timeline</li>
                  <li>You'll receive a contract and project roadmap</li>
                  <li>We'll begin work once everything is signed</li>
                </ul>
              </div>
              <p>We'll be in touch within the next 24 hours to discuss the next steps.</p>
              <p>Thank you for choosing Micorp for your project!</p>
            `,
          }
        case "declined":
          return {
            subject: `Project Update: "${jobData.project_title}"`,
            message: `
              <h2 style="color: #dc3545;">Project Status Update</h2>
              <p>Hi <strong>${jobData.client_name}</strong>,</p>
              <p>Thank you for your interest in working with Micorp on "<strong>${jobData.project_title}</strong>".</p>
              <div style="background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 5px; padding: 15px; margin: 20px 0;">
                <p style="color: #721c24; margin: 0;">After careful consideration, we've determined that this project isn't the best fit for our current capabilities and focus areas.</p>
              </div>
              <p>This decision doesn't reflect the quality or value of your project - it's simply a matter of alignment with our expertise and current capacity.</p>
              <p>We appreciate you thinking of us and wish you the best of luck with your project.</p>
            `,
          }
        case "negotiating":
          return {
            subject: `Let's Discuss Your Project: "${jobData.project_title}"`,
            message: `
              <h2 style="color: #007bff;">Let's Talk About Your Project</h2>
              <p>Hi <strong>${jobData.client_name}</strong>,</p>
              <p>We've reviewed your project "<strong>${jobData.project_title}</strong>" and we're interested in working with you!</p>
              <div style="background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 5px; padding: 15px; margin: 20px 0;">
                <p style="color: #0c5460; margin: 0;">We'd like to discuss some details to ensure we deliver exactly what you're looking for and provide you with the most accurate proposal.</p>
              </div>
              <p>Our team will reach out to you within 24 hours to:</p>
              <ul>
                <li>Clarify project requirements and scope</li>
                <li>Discuss timeline and budget considerations</li>
                <li>Answer any questions you might have</li>
                <li>Provide recommendations based on our experience</li>
              </ul>
              <p>We're excited about the possibility of working together!</p>
            `,
          }
        case "pending":
          return {
            subject: `Project Status: "${jobData.project_title}" - Under Review`,
            message: `
              <h2 style="color: #ffc107;">Project Under Review</h2>
              <p>Hi <strong>${jobData.client_name}</strong>,</p>
              <p>Your project "<strong>${jobData.project_title}</strong>" is currently under review by our team.</p>
              <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px; padding: 15px; margin: 20px 0;">
                <p style="color: #856404; margin: 0;">We're carefully evaluating your requirements to provide you with the best possible solution.</p>
              </div>
              <p>We'll get back to you within 24-48 hours with an update on your project status.</p>
              <p>Thank you for your patience!</p>
            `,
          }
        default:
          return {
            subject: `Project Update: "${jobData.project_title}"`,
            message: `
              <h2>Project Status Update</h2>
              <p>Hi <strong>${jobData.client_name}</strong>,</p>
              <p>There's been an update to your project "<strong>${jobData.project_title}</strong>".</p>
              <p>Current status: <strong>${newStatus}</strong></p>
              <p>We'll be in touch with more details soon.</p>
            `,
          }
      }
    }

    const { subject, message } = getStatusMessage(newStatus)

    // Send status update email to client
    const result = await resend.emails.send({
      from: "noreply@micorp.pro",
      to: jobData.client_email,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #007bff, #0056b3); color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">Micorp</h1>
          </div>
          <div style="padding: 30px; background: #f8f9fa; border-radius: 0 0 8px 8px;">
            ${message}
            <div style="background: white; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #007bff;">
              <h4 style="margin-top: 0;">Project Details:</h4>
              <p><strong>Project:</strong> ${jobData.project_title}</p>
              <p><strong>Type:</strong> ${jobData.project_type}</p>
              ${jobData.budget_range ? `<p><strong>Budget:</strong> ${jobData.budget_range}</p>` : ""}
              ${jobData.timeline ? `<p><strong>Timeline:</strong> ${jobData.timeline}</p>` : ""}
            </div>
            <p style="margin-top: 30px;">Best regards,<br><strong>The Micorp Team</strong></p>
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:habimanahirwa@gmail.com" style="color: #007bff; text-decoration: none;">Contact us directly</a>
            </div>
          </div>
        </div>
      `,
    })

    console.log("Status notification email result:", result)

    return NextResponse.json({
      success: true,
      emailId: result.data?.id,
    })
  } catch (error) {
    console.error("Error sending status notification:", error)
    return NextResponse.json(
      {
        error: "Failed to send status notification",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
