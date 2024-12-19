import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ProjectsSection } from '@/components/sections/projects';
import { ExperienceSection } from '@/components/sections/experience';
import { EducationSection } from '@/components/sections/education';
import { CertificationsSection } from '@/components/sections/certifications';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}