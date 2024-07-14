"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const mobileNav = document.querySelector(".mobile-nav") as HTMLElement;
    const mobileLinks = document.querySelectorAll(
      ".mobile-nav__link"
    ) as NodeListOf<HTMLElement>;

    if (mobileNav) {
      mobileNav.style.display = isNavOpen ? "flex" : "none";
      document.body.style.overflow = isNavOpen ? "hidden" : "auto";
    }
    if (isNavOpen) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    // Add click event listener to each mobile link
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileNav) {
          mobileNav.style.display = "none";
          document.body.style.overflow = "auto";
        }
        setIsNavOpen(false); // Update state to reflect the UI change
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      mobileLinks.forEach((link) => {
        link.removeEventListener("click", () => {
          if (mobileNav) {
            mobileNav.style.display = "none";
            document.body.style.overflow = "auto";
          }
          setIsNavOpen(false);
        });
      });
    };
  }, [isNavOpen]);

  return (
    <nav className="nav">
      <Link href="/">
        <div className="header__logo">
          <div className="header__image">
            <Image src="/logo-dark.png" alt="logo" fill={true} />
          </div>
          <h4 className="header__text">TRADER CLUB</h4>
        </div>
      </Link>
      <ul className="header__menu">
        <li>
          <Link className="header__link" href="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className="header__link" href="/#about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link className="header__link" href="/#courses">
            COURSES
          </Link>
        </li>
        <li>
          <Link className="header__link" href="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
      <button className="header__bars" onClick={toggleNav}>
        {isNavOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="grey"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="grey"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </nav>
  );
}
