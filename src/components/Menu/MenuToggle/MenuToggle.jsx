import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


function MenuToggle({ toggleMenu, menuActive, children }) {
  return (
    <div
      onClick={toggleMenu}
        className={!menuActive ? "menu-toggle" : "menu-toggle menu-toggle-active"}
    >
      <span className="menu-text">{children}</span>
      <div className="menu-burger">

      <FontAwesomeIcon icon={!menuActive ? faBars : faTimes} />
      </div>
    </div>
  );
}

export default MenuToggle;
