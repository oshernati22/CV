import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";

function Navbar() {
  useEffect(() => {
    func();
  }, []);

  const func = () => {
    const checkbox = document.getElementById("navi-toogle") as HTMLInputElement;
    const icon = document.getElementById("navi-toogle-span");
    const listener = function (e: Event) {
      if (e.target !== checkbox && e.target !== icon) {
        checkbox.checked = false;
        document.removeEventListener("click", listener);
      }
    };

    checkbox.addEventListener("click", function () {
      if (this.checked) {
        document.addEventListener("click", listener);
      }
    });
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toogle"
      />

      <label for="navi-toogle" className="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <navigator id="icon" className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              className="navigation__link"
              activeClass="active"
              href="#"
              to="main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              activeClass="active"
              href="#"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              About
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              activeClass="active"
              href="#"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Skills
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              activeClass="active"
              href="#"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Projects
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              className="navigation__link"
              activeClass="active"
              href="#"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </navigator>
    </div>
  );
}

export default Navbar;
