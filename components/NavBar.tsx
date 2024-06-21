import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <div className="header__logo">
          <div className="header__image">
            <Image src="/logo.png" alt="logo" fill={true} />
          </div>
          <h4 className="header__text">TRADER CLUB™</h4>
        </div>
      </Link>
      <ul className="header__menu">
        <li>
          <a className="header__link" href="#home">
            HOME
          </a>
        </li>
        <li>
          <a className="header__link" href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a className="header__link" href="#courses">
            COURSES
          </a>
        </li>
        <li>
          <a className="header__link" href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
      <button className="header__bars">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}
