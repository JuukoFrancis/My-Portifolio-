import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import SKillsSection from "../components/SKillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Toggle theme */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* Nav bar*/}
      <NavBar />
      {/* Main Content*/}
      <main>
        <HeroSection />
        <AboutMe />
        <SKillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer*/}
    </div>
  );
};

export default HomePage;
