import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    console.log("Resend webhook received:", body)
    
    // Handle different webhook events
    switch (body.type) {
      case 'email.sent':
        console.log(`Email sent successfully: ${body.data.email_id}`)
        break
      case 'email.delivered':
        console.log(`Email delivered: ${body.data.email_id}`)
        break
      case 'email.bounced':
        console.log(`Email bounced: ${body.data.email_id}`)
        break
      case 'email.complained':
        console.log(`Email complained: ${body.data.email_id}`)
        break
      default:
        console.log(`Unknown webhook type: ${body.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}
