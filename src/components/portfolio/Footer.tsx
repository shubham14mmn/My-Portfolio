// Footer with copyright and quick socials
import { Github, Linkedin, Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shubham Raj. Built with{" "}
          <Heart className="inline h-3.5 w-3.5 fill-primary text-primary" /> using React & Tailwind.
        </p>
        <div className="flex gap-3">
          <a href="https://github.com/shubham14mmn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com/in/shubham-singh-a265a8296" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          <a href="https://leetcode.com/u/Shubham14mmn" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-muted-foreground hover:text-primary"><Code2 className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
