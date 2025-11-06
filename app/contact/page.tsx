"use client"

import { MotionSection } from "@/components/motion-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { sendMail } from "@/lib/send-mail"
import { toast } from "sonner"

export default function ContactPage() {

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "all",
    reValidateMode: "onChange",
    shouldFocusError: true,
  })

  const submit = async (data: { name: string, email: string, message: string }) => {
    if(isSubmitting) {
      return toast.loading('Submitting...');
    }

    const mailText = `Name: ${data.name}\n  Email: ${data.email}\nMessage: ${data.message}`;
    const response = await sendMail({
      email: data.email,
      subject: "New Contact Form Submission",
      text: mailText,
    })
    if (response?.messageId) {
      toast.success('Form Submitted Successfully.');
    } else {
      toast.error('Failed To send form.');
    }
    reset()
  }

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
            <CardContent>
              <h2 className="text-2xl font-bold mb-6">Send Message</h2>
              <form
                className="space-y-4"
                onSubmit={handleSubmit(submit)}
              >
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required",
                      },
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "Name must be at most 30 characters",
                      },
                      pattern: {
                        value: /^[a-zA-Z\s]+$/,
                        message: "Name must contain only letters and spaces",
                      },
                    })}
                    id="name"
                    name="name"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                  <div className="text-red-500 text-sm">
                    {errors.name?.message}
                  </div>
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Email is invalid",
                      },
                      minLength: {
                        value: 5,
                        message: "Email must be at least 5 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Email must be at most 50 characters",
                      }
                    })}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                  <div className="text-red-500 text-sm">
                    {errors.email?.message}
                  </div>
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Message is required",
                      },
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                      maxLength: {
                        value: 500,
                        message: "Message must be at most 500 characters",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9\s.,!?]+$/,
                        message: "Message must contain only letters, numbers, spaces, and common punctuation",
                      },
                    })}
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    disabled={isSubmitting}
                    rows={5}
                  />
                  <div className="text-red-500 text-sm">
                    {errors.message?.message}
                  </div>
                </div>

                <Button disabled={isSubmitting} type="submit" size="lg" className={`w-full ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer bg-primary text-primary-foreground'}`}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </MotionSection>
      </div>
    </div>
  )
}
