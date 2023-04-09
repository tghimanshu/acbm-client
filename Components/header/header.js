import Link from "next/link";
import { useState } from "react";

export default function () {
  const [navActive, setNavActive] = useState(false);
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link href="/">
            <img src="images/logo.png" width={100} />
            {/* <a>ACBM</a> */}
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
              <Link href={"/contact"}>
                <a>Contact</a>
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
