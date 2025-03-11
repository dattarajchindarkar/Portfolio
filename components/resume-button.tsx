"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumeButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    const resumeUrl = "/resume/Resume_Dattaraj.pdf"; // Corrected path
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Dattaraj_Resume.pdf"); // Ensures file is downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      size="lg"
      className="group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleDownload}
    >
      <span className="flex items-center gap-2">
        <Download
          className={`h-4 w-4 transition-transform duration-300 ${
            isHovered ? "translate-y-1" : ""
          }`}
        />
        Download Resume
      </span>
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary-foreground/20 transition-all duration-300 group-hover:w-full"></span>
    </Button>
  );
}
