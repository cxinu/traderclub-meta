export default function MobileNav() {
  return (
    <div className="mobile-nav">
      <nav>
        <ul className="mobile-nav__menu">
          <li>
            <a className="mobile-nav__link" href="#home">
              <strong>✦</strong> Home
            </a>
          </li>
          <li>
            <a className="mobile-nav__link" href="#about">
              <strong>✦</strong> About
            </a>
          </li>
          <li>
            <a className="mobile-nav__link" href="#services">
              <strong>✦</strong> Services
            </a>
          </li>
          <li>
            <a className="mobile-nav__link" href="#contact">
              <strong>✦</strong> Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
