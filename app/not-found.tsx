import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 text-center">
      <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-6 mb-6">
        <FileQuestion className="h-12 w-12 text-blue-600" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button size="lg" asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}

