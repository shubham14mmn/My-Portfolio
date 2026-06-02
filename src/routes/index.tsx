import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { Loader } from "@/components/portfolio/Loader";
import { Particles } from "@/components/portfolio/Particles";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shubham Raj — Full Stack Developer & CSE Student" },
      {
        name: "description",
        content:
          "Portfolio of Shubham Raj, B.Tech CSE student at Galgotias University and Full Stack Developer skilled in React, Node.js, MongoDB and DSA.",
      },
      { property: "og:title", content: "Shubham Raj — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer & CSE student. React, Node.js, MongoDB, DSA. Explore projects, skills and achievements.",
      },
    ],
  }),
});

function Index() {
  useScrollReveal();
  return (
    <div className="relative min-h-screen">
      <Loader />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
