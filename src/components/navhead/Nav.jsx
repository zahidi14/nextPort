"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import React, { useState } from "react";
import ButNav from "./ButNav";
import Title from "./title.svg";
import BtnNav from "./BtnNav";
import "../../styles/Nav/_nav.scss";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const getLoc = () => {
    switch (pathname) {
      case "/":
        return "Welcome Aboard";
      case "/about":
        return "Bio Log";
      case "/project":
        return "Mission Log";
      case "/contact":
        return "Connect Station";
      default:
        return "Page";
    }
  };

  const toggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="navigation">
      <div className="head">
        <button onClick={toggle} className="nav-toggle-button">
          <ButNav
            bot={navOpen ? 425 : 575}
            top={navOpen ? 575 : 425}
            mid={navOpen ? 0 : 22}
            color={navOpen ? "#ff1800" : "#fff"}
            rotate={navOpen ? "expanded" : "shut"}
          />
        </button>
        <div className="title">
          <div className="text">{getLoc()}</div>
          <Title />
        </div>
      </div>

      <nav className={`nav-menu ${navOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <Link href="/">
              <BtnNav text="Dashboard" />
            </Link>
          </li>
          <li>
            <Link href="/about">
              <BtnNav text="Bio Log" />
            </Link>
          </li>
          <li>
            <Link href="/project">
              <BtnNav text="Mission Log" />
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <BtnNav text="Send Signal" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
