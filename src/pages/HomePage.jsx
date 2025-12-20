import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

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
      </main>
      {/* Footer*/}
    </div>
  );
};

export default HomePage;
