import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/dattarajchindarkar",
      ariaLabel: "Visit my GitHub profile",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/dattaraj-chindarkar-163680282/",
      ariaLabel: "Visit my LinkedIn profile",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/Dattaraj",
      ariaLabel: "Visit my Twitter profile",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "dattarajchindarkar30@gmail.com",
      ariaLabel: "Send me an email",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="icon"
          className="rounded-full transition-transform hover:scale-110 hover:border-primary"
          asChild
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
          >
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
}
