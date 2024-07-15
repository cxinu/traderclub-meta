import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="mobile-nav">
      <nav>
        <ul className="mobile-nav__menu">
          <li>
            <Link className="mobile-nav__link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="mobile-nav__link" href="/#about">
              About
            </Link>
          </li>
          <li>
            <Link className="mobile-nav__link" href="/#courses">
              Courses
            </Link>
          </li>
          <li>
            <Link className="mobile-nav__link" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
