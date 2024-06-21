import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <header className="header container">
        <NavBar />
      </header>
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      {/* <footer></footer> */}
    </>
  );
}
