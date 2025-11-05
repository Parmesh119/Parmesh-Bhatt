"use client"

import { MotionSection } from "@/components/motion-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <MotionSection>
        <div className="space-y-2 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s work together!
          </p>
        </div>
      </MotionSection>

      <div className="grid md:grid-cols-2 gap-12">
        <MotionSection>
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-6">Let&apos;s Connect</h2>
              <p className="text-muted-foreground text-justify mb-8">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </div>

            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className=" flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">parmeshb90@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+91 6355177933</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Gujarat, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/Parmesh119"
                target="_blank"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/parmesh-bhatt/"
                target="_blank"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/Parmesh_119"
                target="_blank"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </MotionSection>

        <MotionSection>
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Send Message</h2>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert("Thanks for reaching out! I'll get back to you soon.")
                }}
              >
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </MotionSection>
      </div>
    </div>
  )
}
