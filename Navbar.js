import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
            <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item-youtube">
              <a href="https://www.youtube.com/watch?time_continue=3&v=dkdv9Ol1F5M&feature=emb_title" className="YouTube-logo">
                <img src="./images/logo-youtube.png" alt="Youtube logo"/>
              </a>
            </li>
          </ul>
          <ul id="Burger" className="nav-items-vertical">
            <li className="nav-item-vertical">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item-vertical">
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item-vertical">
            <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item-youtube-vertical">
              <a href="https://www.youtube.com/watch?time_continue=3&v=dkdv9Ol1F5M&feature=emb_title" className="YouTube-logo">
                <img src="./images/logo-youtube.png" alt="Youtube logo"/>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}