// Hero/Home section with animated typing intro, profile placeholder, social links
import { Download, Github, Linkedin, Code2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typing } from "./Typing";
import profileImg from "@/assets/profile.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16"
    >
      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center">
        {/* Left: text */}
        <div className="animate-fade-in-up">
          <p className="mb-3 inline-block rounded-full border border-border bg-secondary/50 px-4 py-1 text-xs font-medium text-muted-foreground">
            👋 Hi there, welcome to my portfolio
          </p>
          <h1 className="mb-4 font-display text-5xl font-bold leading-tight md:text-6xl">
            I'm <span className="text-gradient">Shubham Raj</span>
          </h1>
          <h2 className="mb-5 text-xl font-medium text-muted-foreground md:text-2xl">
            <Typing
              phrases={[
                "Full Stack Developer",
                "CSE Student @ Galgotias",
                "DSA Enthusiast",
                "Open Source Learner",
              ]}
            />
          </h2>
          <p className="mb-8 max-w-xl text-muted-foreground">
            I build clean, scalable web experiences with the MERN stack and love
            solving algorithmic challenges. Currently exploring real-time apps,
            data analytics, and everything in between.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            <Button size="lg" className="shadow-glow" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            <SocialIcon
              href="https://github.com/shubham14mmn"
              label="GitHub"
              icon={<Github className="h-5 w-5" />}
            />
            <SocialIcon
              href="https://linkedin.com/in/shubham-singh-a265a8296"
              label="LinkedIn"
              icon={<Linkedin className="h-5 w-5" />}
            />
            <SocialIcon
              href="https://leetcode.com/u/Shubham14mmn"
              label="LeetCode"
              icon={<Code2 className="h-5 w-5" />}
            />
          </div>
        </div>

        {/* Right: profile image placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-full bg-gradient-hero opacity-30 blur-2xl" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-primary/40 bg-gradient-card shadow-glow md:h-80 md:w-80">
              <img
                src={profileImg}
                alt="Shubham Raj profile photo"
                className="h-full w-full object-cover object-[center_20%] scale-110"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 rounded-full bg-card px-4 py-2 text-xs font-medium shadow-card border border-border">
              💻 Available for work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-glow hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}
