import { useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Nav = () => {
  const barsRef = useRef();
  const listNavRef = useRef();
  const navRef = useRef();

  const { pathname } = useLocation();

  // for toggling the nav in mobile and tablet type devices
  function ToggleNav() {
    const bars = barsRef.current;
    const listNav = listNavRef.current;

    bars.classList.toggle("toggle");
    listNav.classList.toggle("nav-active");
    document.body.classList.toggle("no-scroll");
  }

  window.addEventListener("scroll", function () {
    const nav = navRef.current;

    if (pathname !== "/") {
      nav.classList.add("stickyNav");
    } else {
      nav.classList.toggle("stickyNav", this.window.scrollY > 0);
    }
  });

  // adding the sticky nav class to each pages without the home page
  useEffect(() => {
    const nav = navRef.current;
    nav.classList.toggle("stickyNav", pathname !== "/");
  }, [pathname]);

  return (
    <nav ref={navRef}>
      <h2 className="nav_title">
        <Link onClick={() => window.scrollTo(0, 0)} to="/">
          devr()
        </Link>
      </h2>

      <ul className="nav_links" ref={listNavRef}>
        <li>
          <NavLink
            aria-label="home page link"
            onClick={() => window.scrollTo(0, 0)}
            exact
            activeClassName="nav_active_link"
            to="/#"
          >
            Home
          </NavLink>
        </li>
        <li>
          <a href="/#about" aria-label="about section link">
            About
          </a>
        </li>
        <li>
          <a href="/#portfolio" aria-label="portfolio section link">
            Portfolio
          </a>
        </li>
        <li>
          <a aria-label="services section link" href="/#services">
            Services
          </a>
        </li>
        <li>
          <a href="/#hire_or_contact" aria-label="contact section link">
            Contact
          </a>
        </li>
      </ul>

      <div className="bars" ref={barsRef} onClick={ToggleNav}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </nav>
  );
};

export default Nav;
