import React from "react";
import { Link } from "react-scroll";
import Clock from "react-live-clock";

//styling
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navbar">
      <div className="nav-date">
        <Clock format={"llll"} ticking={true} timezone={"US/Eastern"} />
        <div className="updated">Last Updated: May 16th, 2024</div>
      </div>
        <div className="logo">
          <Link to="home" duration={500} smooth={true} offset={-125}>
            <div className="logo-text">PTV Newsletter</div>
          </Link>
        </div>
        <div className="links">
          <Link to="reminders" duration={500} smooth={true} offset={-125} className="nav-reminders">
            Reminders
          </Link>
          <Link to="contact" duration={500} smooth={true} className="nav-contact">
            Contact
          </Link>
        </div>
    </div>
  );
}
