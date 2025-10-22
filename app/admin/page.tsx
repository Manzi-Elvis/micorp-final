"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Mail,
  Phone,
  Calendar,
  DollarSign,
  Clock,
  User,
  Building,
  FileText,
  QrCode,
  Briefcase,
  Send,
  LogOut,
  Palette,
} from "lucide-react"
import { supabase, type JobRequest, type ContactSubmission } from "@/lib/supabase"
import { Loading } from "@/components/ui/loading"
import { toast } from "sonner"
import QRCode from "qrcode"
import { submitToIndexNow, submitAllSitePagesToIndexNow, type IndexNowSubmissionResult } from "@/lib/indexnow"

const ADMIN_PASSWORD = "micorp2024admin"
const SESSION_KEY = "micorp_admin_session"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [jobRequests, setJobRequests] = useState<JobRequest[]>([])
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState("")

  // Email composition state
  const [emailDialog, setEmailDialog] = useState(false)
  const [emailTo, setEmailTo] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailMessage, setEmailMessage] = useState("")
  const [isHtml, setIsHtml] = useState(false)
  const [sendingEmail, setSendingEmail] = useState(false)

  // QR Code customization state
  const [qrDialog, setQrDialog] = useState(false)
  const [qrColor, setQrColor] = useState("#000000")
  const [qrBgColor, setQrBgColor] = useState("#FFFFFF")
  const [qrSize, setQrSize] = useState(256)
  const [includeLogo, setIncludeLogo] = useState(true)

  // IndexNow state
  const [indexNowDialog, setIndexNowDialog] = useState(false)
  const [customUrls, setCustomUrls] = useState("")
  const [submittingIndexNow, setSubmittingIndexNow] = useState(false)
  const [indexNowResult, setIndexNowResult] = useState<IndexNowSubmissionResult | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing session on component mount
  useEffect(() => {
    const savedSession = localStorage.getItem(SESSION_KEY)
    if (savedSession) {
      const sessionData = JSON.parse(savedSession)
      const now = new Date().getTime()

      // Check if session is still valid (24 hours)
      if (now - sessionData.timestamp < 24 * 60 * 60 * 1000) {
        setIsAuthenticated(true)
        fetchData()
        generateQRCode()
      } else {
        localStorage.removeItem(SESSION_KEY)
      }
    }
  }, [])

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)

      // Save session to localStorage
      const sessionData = {
        authenticated: true,
        timestamp: new Date().getTime(),
      }
      localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData))

      fetchData()
      generateQRCode()
      toast.success("Logged in successfully")
    } else {
      toast.error("Invalid password")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem(SESSION_KEY)
    setPassword("")
    toast.success("Logged out successfully")
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      // Fetch job requests
      const { data: jobs, error: jobsError } = await supabase
        .from("job_requests")
        .select("*")
        .order("created_at", { ascending: false })

      if (jobsError) throw jobsError
      setJobRequests(jobs || [])

      // Fetch contact submissions
      const { data: contacts, error: contactsError } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false })

      if (contactsError) throw contactsError
      setContactSubmissions(contacts || [])
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error)
      toast.error("Failed to fetch data")
      setIsLoading(false)
    } finally {
      setLoading(false)
    }
  }

  const generateQRCode = async () => {
    try {
      const jobRequestUrl = `${window.location.origin}/request-project`

      const qrDataUrl = await QRCode.toDataURL(jobRequestUrl, {
        width: qrSize,
        margin: 2,
        color: {
          dark: qrColor,
          light: qrBgColor,
        },
        errorCorrectionLevel: "M",
      })

      if (includeLogo) {
        // Create canvas to add logo
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        const img = new Image()

        img.onload = () => {
          canvas.width = qrSize
          canvas.height = qrSize

          // Draw QR code
          const qrImg = new Image()
          qrImg.onload = () => {
            ctx?.drawImage(qrImg, 0, 0, qrSize, qrSize)

            // Draw logo in center
            const logoSize = qrSize * 0.2
            const logoX = (qrSize - logoSize) / 2
            const logoY = (qrSize - logoSize) / 2

            // Draw white background for logo
            if (ctx) {
              ctx.fillStyle = "#FFFFFF"
              ctx.fillRect(logoX - 5, logoY - 5, logoSize + 10, logoSize + 10)
              ctx.drawImage(img, logoX, logoY, logoSize, logoSize)
            }

            setQrCodeUrl(canvas.toDataURL())
          }
          qrImg.src = qrDataUrl
        }

        img.crossOrigin = "anonymous"
        img.src = "/brand/logo.png" // Your company logo
      } else {
        setQrCodeUrl(qrDataUrl)
      }
    } catch (error) {
      console.error("Error generating QR code:", error)
      // Fallback to simple QR code
      const jobRequestUrl = `${window.location.origin}/request-project`
      const fallbackQr = await QRCode.toDataURL(jobRequestUrl)
      setQrCodeUrl(fallbackQr)
    }
  }

  const sendCustomEmail = async () => {
    if (!emailTo || !emailSubject || !emailMessage) {
      toast.error("Please fill in all fields")
      return
    }

    setSendingEmail(true)
    try {
      const response = await fetch("/api/send-custom-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: emailTo,
          subject: emailSubject,
          message: emailMessage,
          isHtml: isHtml,
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Email sent successfully!")
        setEmailDialog(false)
        setEmailTo("")
        setEmailSubject("")
        setEmailMessage("")
      } else {
        throw new Error(result.error || "Failed to send email")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast.error("Failed to send email")
    } finally {
      setSendingEmail(false)
    }
  }

  const submitToIndexNowAPI = async (urls: string[]) => {
    setSubmittingIndexNow(true)
    setIndexNowResult(null)
    
    try {
      const host = window.location.hostname
      const result = await submitToIndexNow({
        urls,
        host,
        baseUrl: window.location.origin
      })
      
      setIndexNowResult(result)
      
      if (result.success) {
        toast.success(`Successfully submitted ${result.submittedUrls?.length || 0} URLs to search engines`)
      } else {
        toast.error(`Failed to submit URLs: ${result.message}`)
      }
    } catch (error) {
      console.error("Error submitting to IndexNow:", error)
      toast.error("Failed to submit URLs to IndexNow")
    } finally {
      setSubmittingIndexNow(false)
    }
  }

  const submitAllPages = async () => {
    const allPages = [
      '/',
      '/about',
      '/services',
      '/portfolio',
      '/blog',
      '/contact',
      '/team',
      '/donate',
      '/request-project',
    ]
    
    const urls = allPages.map(page => `https://${window.location.hostname}${page}`)
    await submitToIndexNowAPI(urls)
  }

  const submitCustomUrls = async () => {
    if (!customUrls.trim()) {
      toast.error("Please enter at least one URL")
      return
    }
    
    const urls = customUrls
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0)
      .map(url => {
        // Add protocol if missing
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
          return `https://${url}`
        }
        return url
      })
    
    await submitToIndexNowAPI(urls)
  }

  const updateJobStatus = async (id: string, status: string) => {
    try {
      // Get the current job data before updating
      const currentJob = jobRequests.find((job) => job.id === id)
      if (!currentJob) {
        toast.error("Job not found")
        return
      }

      const oldStatus = currentJob.status

      // Update status in database
      const { error } = await supabase
        .from("job_requests")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", id)

      if (error) throw error

      // Update local state
      setJobRequests((prev) => prev.map((job) => (job.id === id ? { ...job, status } : job)))

      // Send status change notification email if status actually changed
      if (oldStatus !== status) {
        try {
          const response = await fetch("/api/send-status-notification", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              jobData: currentJob,
              newStatus: status,
              oldStatus: oldStatus,
            }),
          })

          if (!response.ok) {
            console.error("Failed to send status notification email")
          } else {
            toast.success(`Status updated and notification sent to ${currentJob.client_email}`)
          }
        } catch (emailError) {
          console.error("Failed to send status notification email:", emailError)
          toast.success("Status updated successfully (email notification failed)")
        }
      } else {
        toast.success("Status updated successfully")
      }
    } catch (error) {
      console.error("Error updating status:", error)
      toast.error("Failed to update status")
    }
  }

  const updateContactStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", id)

      if (error) throw error

      setContactSubmissions((prev) => prev.map((contact) => (contact.id === id ? { ...contact, status } : contact)))
      toast.success("Status updated successfully")
    } catch (error) {
      console.error("Error updating status:", error)
      toast.error("Failed to update status")
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "accepted":
        return "bg-green-100 text-green-800"
      case "declined":
        return "bg-red-100 text-red-800"
      case "negotiating":
        return "bg-blue-100 text-blue-800"
      case "unread":
        return "bg-red-100 text-red-800"
      case "read":
        return "bg-blue-100 text-blue-800"
      case "replied":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const quickEmailTemplates = {
    jobAccepted: (clientName: string, projectTitle: string) => ({
      subject: `Job Request Accepted - ${projectTitle}`,
      message: `Hi ${clientName},\n\nGreat news! We've reviewed your job request for "${projectTitle}" and we'd love to work with you on this project.\n\nOur team will be in touch within the next 24 hours to discuss the next steps, timeline, and provide you with a detailed proposal.\n\nThank you for choosing Micorp for your project needs.\n\nBest regards,\nThe Micorp Team`,
    }),
    jobDeclined: (clientName: string, projectTitle: string) => ({
      subject: `Job Request Update - ${projectTitle}`,
      message: `Hi ${clientName},\n\nThank you for your interest in working with Micorp on "${projectTitle}".\n\nAfter careful consideration, we've determined that this project isn't the best fit for our current capabilities and focus areas.\n\nWe appreciate you thinking of us and wish you the best of luck with your project.\n\nBest regards,\nThe Micorp Team`,
    }),
    needMoreInfo: (clientName: string, projectTitle: string) => ({
      subject: `Additional Information Needed - ${projectTitle}`,
      message: `Hi ${clientName},\n\nThank you for your job request for "${projectTitle}". We're very interested in working with you on this project.\n\nTo provide you with the most accurate proposal, we need some additional information:\n\n- [Add specific questions here]\n- [Add more questions as needed]\n\nOnce we have these details, we'll be able to provide you with a comprehensive proposal.\n\nLooking forward to hearing from you!\n\nBest regards,\nThe Micorp Team`,
    }),
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter the admin password to access the dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Enter admin password"
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-4">
          <Dialog open={emailDialog} onOpenChange={setEmailDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Send className="h-4 w-4 mr-2" />
                Compose Email
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Compose Email</DialogTitle>
                <DialogDescription>Send a custom email to clients or contacts</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-to">To</Label>
                  <Input
                    id="email-to"
                    value={emailTo}
                    onChange={(e) => setEmailTo(e.target.value)}
                    placeholder="recipient@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-subject">Subject</Label>
                  <Input
                    id="email-subject"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    placeholder="Email subject"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-message">Message</Label>
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="html-mode" className="text-sm">
                        HTML Mode
                      </Label>
                      <Switch id="html-mode" checked={isHtml} onCheckedChange={setIsHtml} />
                    </div>
                  </div>
                  <Textarea
                    id="email-message"
                    value={emailMessage}
                    onChange={(e) => setEmailMessage(e.target.value)}
                    placeholder={isHtml ? "Enter HTML content..." : "Enter your message..."}
                    className="min-h-[200px]"
                  />
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setEmailDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={sendCustomEmail} disabled={sendingEmail}>
                    {sendingEmail ? "Sending..." : "Send Email"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={qrDialog} onOpenChange={setQrDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Palette className="h-4 w-4 mr-2" />
                Customize QR
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Customize QR Code</DialogTitle>
                <DialogDescription>Customize your job request QR code</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="qr-color">QR Color</Label>
                    <Input id="qr-color" type="color" value={qrColor} onChange={(e) => setQrColor(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="qr-bg-color">Background Color</Label>
                    <Input
                      id="qr-bg-color"
                      type="color"
                      value={qrBgColor}
                      onChange={(e) => setQrBgColor(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qr-size">Size: {qrSize}px</Label>
                  <Input
                    id="qr-size"
                    type="range"
                    min="128"
                    max="512"
                    value={qrSize}
                    onChange={(e) => setQrSize(Number(e.target.value))}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="include-logo" checked={includeLogo} onCheckedChange={setIncludeLogo} />
                  <Label htmlFor="include-logo">Include Company Logo</Label>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setQrDialog(false)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      generateQRCode()
                      setQrDialog(false)
                    }}
                  >
                    Apply Changes
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <QrCode className="h-4 w-4 mr-2" />
                QR Code
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Job Request QR Code</DialogTitle>
                <DialogDescription>Share this QR code to direct people to the job request page</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col items-center space-y-4">
                {qrCodeUrl && (
                  <img src={qrCodeUrl || "/placeholder.svg"} alt="Job Request QR Code" className="border rounded-lg" />
                )}
                <p className="text-sm text-muted-foreground text-center">
                  Scan to visit: {window.location.origin}/request-project
                </p>
                <Button
                  onClick={() => {
                    const link = document.createElement("a")
                    link.download = "micorp-project-request-qr.png"
                    link.href = qrCodeUrl
                    link.click()
                  }}
                >
                  Download QR Code
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={indexNowDialog} onOpenChange={setIndexNowDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Send className="h-4 w-4 mr-2" />
                IndexNow
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Submit URLs to Search Engines</DialogTitle>
                <DialogDescription>
                  Use IndexNow to notify search engines about your website updates
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Quick Actions</Label>
                  <div className="flex gap-2">
                    <Button 
                      onClick={submitAllPages} 
                      disabled={submittingIndexNow}
                      variant="outline"
                    >
                      Submit All Pages
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="custom-urls">Custom URLs (one per line)</Label>
                  <Textarea
                    id="custom-urls"
                    value={customUrls}
                    onChange={(e) => setCustomUrls(e.target.value)}
                    placeholder="https://example.com/page1&#10;https://example.com/page2&#10;example.com/page3"
                    className="min-h-[150px]"
                  />
                  <p className="text-sm text-muted-foreground">
                    Enter URLs one per line. Protocol (https://) will be added automatically if missing.
                  </p>
                </div>

                {indexNowResult && (
                  <div className="space-y-2">
                    <Label>Submission Result</Label>
                    <div className={`p-3 rounded-lg border ${
                      indexNowResult.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={indexNowResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                          {indexNowResult.success ? 'Success' : 'Failed'}
                        </Badge>
                        <span className="text-sm font-medium">Status: {indexNowResult.status}</span>
                      </div>
                      <p className="text-sm">{indexNowResult.message}</p>
                      {indexNowResult.submittedUrls && indexNowResult.submittedUrls.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm font-medium">Submitted URLs:</p>
                          <ul className="text-sm text-muted-foreground list-disc list-inside">
                            {indexNowResult.submittedUrls.map((url, index) => (
                              <li key={index}>{url}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {indexNowResult.errors && indexNowResult.errors.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm font-medium text-red-600">Errors:</p>
                          <ul className="text-sm text-red-600 list-disc list-inside">
                            {indexNowResult.errors.map((error, index) => (
                              <li key={index}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setIndexNowDialog(false)}>
                    Close
                  </Button>
                  <Button onClick={submitCustomUrls} disabled={submittingIndexNow || !customUrls.trim()}>
                    {submittingIndexNow ? "Submitting..." : "Submit Custom URLs"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button onClick={fetchData} disabled={loading}>
            {loading ? "Refreshing..." : "Refresh"}
          </Button>

          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <Tabs defaultValue="jobs" className="space-y-6">
        <TabsList>
          <TabsTrigger value="jobs">Project Requests ({jobRequests.length})</TabsTrigger>
          <TabsTrigger value="contacts">Contact Messages ({contactSubmissions.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="space-y-6">
          <div className="grid gap-6">
            {jobRequests.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        {job.project_title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {job.client_name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {job.client_email}
                        </span>
                        {job.client_phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            {job.client_phone}
                          </span>
                        )}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
                      <Select value={job.status} onValueChange={(value) => updateJobStatus(job.id, value)}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="accepted">Accepted</SelectItem>
                          <SelectItem value="negotiating">Negotiating</SelectItem>
                          <SelectItem value="declined">Declined</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span className="font-medium">Project Type:</span>
                        <span>{job.project_type}</span>
                      </div>
                      {job.company_name && (
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">Company:</span>
                          <span>{job.company_name}</span>
                        </div>
                      )}
                      {job.budget_range && (
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          <span className="font-medium">Budget:</span>
                          <span>{job.budget_range}</span>
                        </div>
                      )}
                      {job.timeline && (
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">Timeline:</span>
                          <span>{job.timeline}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">Submitted:</span>
                        <span>{new Date(job.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="font-medium">Description:</span>
                    <p className="text-muted-foreground">{job.project_description}</p>
                  </div>

                  {job.requirements && (
                    <div className="space-y-2">
                      <span className="font-medium">Requirements:</span>
                      <p className="text-muted-foreground">{job.requirements}</p>
                    </div>
                  )}

                  <div className="flex gap-2 pt-4 border-t">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const template = quickEmailTemplates.jobAccepted(job.client_name, job.project_title)
                        setEmailTo(job.client_email)
                        setEmailSubject(template.subject)
                        setEmailMessage(template.message)
                        setEmailDialog(true)
                      }}
                    >
                      Accept & Email
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const template = quickEmailTemplates.needMoreInfo(job.client_name, job.project_title)
                        setEmailTo(job.client_email)
                        setEmailSubject(template.subject)
                        setEmailMessage(template.message)
                        setEmailDialog(true)
                      }}
                    >
                      Request Info
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        const template = quickEmailTemplates.jobDeclined(job.client_name, job.project_title)
                        setEmailTo(job.client_email)
                        setEmailSubject(template.subject)
                        setEmailMessage(template.message)
                        setEmailDialog(true)
                      }}
                    >
                      Decline & Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contacts" className="space-y-6">
          <div className="grid gap-6">
            {contactSubmissions.map((contact) => (
              <Card key={contact.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        {contact.subject}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {contact.first_name} {contact.last_name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          {contact.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(contact.created_at).toLocaleDateString()}
                        </span>
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(contact.status)}>{contact.status}</Badge>
                      <Select value={contact.status} onValueChange={(value) => updateContactStatus(contact.id, value)}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="unread">Unread</SelectItem>
                          <SelectItem value="read">Read</SelectItem>
                          <SelectItem value="replied">Replied</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <span className="font-medium">Message:</span>
                    <p className="text-muted-foreground">{contact.message}</p>
                  </div>
                  <div className="flex gap-2 pt-4 border-t">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEmailTo(contact.email)
                        setEmailSubject(`Re: ${contact.subject}`)
                        setEmailMessage(`Hi ${contact.first_name},\n\nThank you for your message. `)
                        setEmailDialog(true)
                      }}
                    >
                      Reply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
