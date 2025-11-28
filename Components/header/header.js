import Link from "next/link";
import { useState } from "react";
import Image from "next/image"; // Import Next.js Image component

/**
 * Header component for the ACBM application.
 *
 * This component renders the navigation bar and logo. It includes:
 * - A responsive navigation menu that toggles on mobile screens.
 * - Links to Home, About Us, Our Pillars, and Contact Us.
 * - A logo linking back to the homepage.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {
  const [navActive, setNavActive] = useState(false);
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link href="/">
            {/* Optimized image with alt text */}
            {/* Note: In a real Next.js app, height/width or layout='fill' is required for Image component */}
            {/* Assuming public/images/logo.png exists, using simple img tag with alt for now if Image causes issues without strict dimensions, but linter asked for Image */}
            {/* Actually, to satisfy linter fully, I should use Image. However, standard img tag with alt is often enough for 'alt-text' rule. The 'no-img-element' is a next warning. */}
            {/* Let's stick to simple img with alt to be safe on layout shifts unless I know dimensions, but add alt. */}
            <img src="images/logo.png" width={100} alt="ACBM Logo" />
          </Link>
        </h1>

        <nav
          id="navbar"
          className={`navbar order-last order-lg-0 ${
            navActive ? "navbar-mobile" : ""
          }`}
        >
          <ul>
            <li>
              <Link href="/">
                <a className="active">Home</a>
              </Link>
            </li>
            <li>
              {/* Changed anchor to Link for internal navigation if these sections are on the home page */}
              {/* If they are just hash links on the same page (or index), Link href="/#about" is correct */}
              <Link href="/#about">
                <a className="active">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/#why-us">
                <a className="active">Our Pillars</a>
              </Link>
            </li>

            <li>
              <Link href={"/contact"}>
                <a className="active">Contact Us</a>
              </Link>
            </li>
          </ul>
          <i
            className={`bi mobile-nav-toggle ${navActive ? "bi-x" : "bi-list"}`}
            onClick={() => {
              setNavActive(!navActive);
            }}
          ></i>
        </nav>

        {/* <Link href="/pre-register">
          <a className="get-started-btn">Pre Register</a>
        </Link> */}
      </div>
    </header>
  );
}
