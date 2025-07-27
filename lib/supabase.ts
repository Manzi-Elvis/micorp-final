import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type JobRequest = {
  id: string
  client_name: string
  client_email: string
  client_phone?: string
  company_name?: string
  project_title: string
  project_description: string
  project_type: string
  budget_range?: string
  timeline?: string
  requirements?: string
  status: "pending" | "accepted" | "declined" | "negotiating"
  created_at: string
  updated_at: string
}

export type ContactSubmission = {
  id: string
  first_name: string
  last_name: string
  email: string
  subject: string
  message: string
  status: "unread" | "read" | "replied"
  created_at: string
  updated_at: string
}
