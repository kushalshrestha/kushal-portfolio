import { useState } from "react";
import "./Menu.scss";
import MenuItem from "./MenuItem/MenuItem";
import MenuToggle from "./MenuToggle/MenuToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";



function Menu() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  const menuItems = [
    {
      icon: <FontAwesomeIcon icon={faLaptop} />,
      tooltip: "Toggle theme",
      action: () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "dark");
        } else {
          localStorage.setItem("theme", "light");
        }
      },
    },
    {
      icon: <FontAwesomeIcon icon={faLaptop} />,
      tooltip: "My GitHub",
      action: () => {
        window.open("https://github.com/kushalshrestha");
      },
    },
  ];

  return (
    <div className={menuActive ? "menu menu-active" : "menu"}>
      <MenuToggle toggleMenu={toggleMenu} menuActive={menuActive}>
        MENU
      </MenuToggle>
      {menuItems.map((menuItem, index) => {
        let angle = -80;
        let increment = 0;
        if (menuItems.length > 1) {
          increment = Math.round(160 / (menuItems.length - 1));
        }
        angle += index * increment;
        return (
          <MenuItem
            key={menuItem.key}
            icon={menuItem.icon}
            tooltip={menuItem.tooltip}
            action={menuItem.action}
            menuActive={menuActive}
            rotationAngle={angle}
          />
        );
      })}
    </div>
  );
}

export default Menu;
