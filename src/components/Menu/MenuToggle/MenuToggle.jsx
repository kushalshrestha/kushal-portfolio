import React from "react";

function MenuToggle({toggleMenu, menuActive, children}) {
  return (
    <div
      onClick={toggleMenu}
      className={!menuActive ? "menu-toggle" : "menu-toggle menu-toggle-active"}
    >
      <span className="menu-text">{children}</span>
      <div className="menu-burger">
        <span className="menu-burger-bar"></span>
        <span className="menu-burger-bar"></span>
        <span className="menu-burger-bar"></span>
      </div>
    </div>
  );
}

export default MenuToggle;
