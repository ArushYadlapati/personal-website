import AboutSection from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import '../antiScroll.css';

export default async function Home() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Experience />
      <Projects />
    </>
  )
};