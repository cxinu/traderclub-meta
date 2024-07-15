import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";

import "../styles/globals.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/mobile.css";
import "../styles/components/contact.css";
import "../styles/components/course.css";
import "../styles/components/footer.css";
import "../styles/utils.css";

import NavBar from "@/components/NavBar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trader Club",
  description: "Empowering traders to thrive, together and informed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <header className="header container">
          <NavBar />
        </header>
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
