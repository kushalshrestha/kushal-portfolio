import React from 'react';
import './MenuItem.scss';

function MenuItem ({ action, icon, tooltip, menuActive, rotationAngle }) {
    const activeTransformStyle = `translate(0, -50%) rotate(${rotationAngle}deg) translate(8em) rotate(${-rotationAngle}deg)`;

    return (
            <div 
                className="menu-item"
                onClick={action}
                style={menuActive ? { transform: activeTransformStyle } : {}}
            >
                <i className={icon}></i>
            </div>
    );
};

export default MenuItem;
