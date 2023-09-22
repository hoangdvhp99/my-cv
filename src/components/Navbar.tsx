import Image from "next/image";
import React from "react";
import Avatar from "@static/images/sapa.jpg";
import Link from "next/link";

function MyNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <Link className="navbar-brand js-scroll-trigger" href="/">
        <span className="d-block d-lg-none">Hoang Dang Viet</span>
        <span className="d-none d-lg-block">
          <Image
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={Avatar}
            alt={"avatar"}
          />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" href="/experience">
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" href="/education">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" href="#skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" href="#interests">
              Interests
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" href="#awards">
              Awards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MyNavbar;
