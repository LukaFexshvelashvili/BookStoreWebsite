import Logo from "./Logo";
import "./Nav.css";
import { M_ScrollLoad } from "../js/ModernScroll.js";
import { useEffect, useState } from "react";

export default function Nav() {
  let [nav, setNav] = useState(false);
  useEffect(() => {
    M_ScrollLoad(".navig", 500, "come3");
  }, []);

  return (
    <nav className="navig come3">
      <div className="container nav_splitter">
        <Logo />
        <div className="z_er"></div>
        <div className={`nav_buttons ${nav ? "getnavcome" : ""}`}>
          <li>Home</li>
          <li>About us</li>
          <li>Courses</li>
          <li>Our Service</li>
          <li>Contact us</li>
          <li className="nav_b">Sign in</li>
        </div>
      </div>
      <div
        className={`nav_burger ${nav ? "actspan" : ""}`}
        onClick={() => setNav(!nav)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
