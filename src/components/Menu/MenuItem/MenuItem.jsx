import React from 'react';
import './MenuItem.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuItem ({ action, icon, tooltip, menuActive, rotationAngle }) {
    const activeTransformStyle = `translate(0, -50%) rotate(${rotationAngle}deg) translate(8em) rotate(${-rotationAngle}deg)`;

    return (
        <div 
            className="menu-item"
            onClick={action}
            style={menuActive ? { transform: activeTransformStyle } : {}}
        >
            {icon}
        </div>
    );
}

export default MenuItem;
