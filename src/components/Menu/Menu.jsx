import { useState } from "react";
import "./Menu.scss";
import MenuItem from './MenuItem/MenuItem';
import MenuToggle from './MenuToggle/MenuToggle';

function Menu() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  return (
    <div className={menuActive ? "menu menu-active" : "menu"}>
      <MenuToggle toggleMenu={toggleMenu} menuActive={menuActive}>
        MENU
      </MenuToggle>
      <MenuItem icon="fa fa-adjust" />
    </div>
  );
}

export default Menu;
