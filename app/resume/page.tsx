"use client"

import { MotionSection } from "@/components/motion-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download } from "lucide-react"

export default function ResumePage() {
  const handleDownload = () => {
    // Replace with your actual resume PDF URL
    const resumeUrl = "/resume.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Parmesh-Bhatt-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-6">
      <MotionSection>
        <h1 className="text-2xl md:text-3xl font-semibold">📋 Resume</h1>
      </MotionSection>

      {/* Download Button */}
      <MotionSection>
        <div className="flex gap-3">
          <Button onClick={handleDownload} className="gap-2">
            <Download size={18} />
            Download Resume
          </Button>
          <Button variant="outline" asChild>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              View Full Profile
            </Link>
          </Button>
        </div>
      </MotionSection>

      {/* PDF Viewer */}
      <MotionSection>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Resume Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-muted rounded-lg overflow-hidden">
              <iframe src="/resume.pdf" className="w-full h-screen md:h-[800px] border-0" title="Resume PDF" />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              If the PDF doesn&apos;t display, please download it using the button above.
            </p>
          </CardContent>
        </Card>
      </MotionSection>
    </div>
  )
}
