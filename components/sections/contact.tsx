"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Parmesh119",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/parmesh-bhatt",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Parmesh_119",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:parmeshb90@gmail.com",
    icon: Mail,
  },
];

export function ContactSection() {

  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
			toast.error("All fields are required...", {
				position: "top-center"
			})
    } else {
      const toastId = toast.loading("Sending message...");
			try {
				emailjs.sendForm(
					'service_1fx4v2a',
					'template_q6cqk0p',
					e.target,
					'RcJS2rrh_yC4RmUQh'
				).then((data) => {
					toast.success("Message send!", {
						id: toastId,
						position: "top-center",
					})
					setName("");
					setEmail("");
					setMessage("");
				}).catch((error) => {
					toast.error("Failed to send message. Please try again.", {
						id: toastId,
						position: "top-center",
					});
				});
			} catch (error) {
				toast.error("Failed to send message. Please try again.", {
					id: toastId,
					position: "top-center",
				});
			}
    }
  }
  
  return (
    <section id="contact" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a question or want to work together? Feel free to reach out!"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
                  </div> 
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your message"
                      name="message"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <p className="text-muted-foreground">
                  Navsari, Gujarat
                  <br />
                  India.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}