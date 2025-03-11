import Link from "next/link";
import { Heart } from "lucide-react";
import SocialLinks from "./social-links";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center">
          <Link href="#home" className="text-2xl font-bold tracking-tight mb-6">
            Dattaraj&apos;s Portfolio
          </Link>

          <div className="mb-6">
            <SocialLinks />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="#home"
              className="text-sm hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-sm hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="text-sm text-muted-foreground flex items-center">
            <span>© {currentYear} Dattaraj. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> and
              Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
