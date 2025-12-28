"use client"

import Image from "next/image"
import { MotionSection } from "@/components/motion-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <MotionSection>
        <div className="space-y-2 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
          <p className="text-lg text-muted-foreground">
            Passionate about building elegant, scalable software that makes a real-world impact.
          </p>
        </div>
      </MotionSection>

      <MotionSection>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/Parmesh_Bhatt.jpg"
              alt="Profile"
              width={300}
              height={400}
              className="rounded-2xl object-cover w-full max-w-sm"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground text-justify">
              <p>
                I&apos;m a full-stack developer who loves turning ideas
                into meaningful digital products. My journey has been driven by
                curiosity, continuous learning, and a genuine desire to solve
                real problems through technology.
              </p>
              <p>
                I enjoy building intuitive, user-focused
                solutions that not only work well, but also feel great to use. I believe in
                clean architecture, thoughtful design, and creating products
                that simplify life for others and leave a positive impact.
              </p>
              <p>
                When I&apos;m not building, I’m exploring new tools, improving my craft,
                or sharing knowledge with fellow developers. I enjoy contributing to the tech community
                and staying connected with the evolving landscape of innovation.
              </p>
            </div>
            <Link href="/contact" passHref>
              <Button size="lg" className="w-fit cursor-pointer">
                Connect With Me
              </Button>
            </Link>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}
