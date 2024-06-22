"use client";

import { useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <>
      <header className="header container">
        <NavBar />
      </header>
      <MobileNav />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      {/* <footer></footer> */}
    </>
  );
}
