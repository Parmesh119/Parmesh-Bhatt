import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {currentYear} By Developer - Parmesh Bhatt. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="https://github.com/Parmesh119" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com/in/parmesh-bhatt" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com/Parmesh_119" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="mailto:parmeshb90@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}