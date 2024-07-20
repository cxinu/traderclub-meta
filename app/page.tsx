"use client";

import { useEffect } from "react";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import CourseSection from "@/components/CourseSection";
import CourseDetails from "@/components/CourseDetails";
import Testimonials from "@/components/Testimonials";

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
      <main>
        <HeroSection />
        <AboutSection />
        <CourseSection />
        {/* <CourseDetails /> */}
        {/* <Testimonials /> */}
      </main>
    </>
  );
}
