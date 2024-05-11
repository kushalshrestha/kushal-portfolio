import React from 'react';
import './MenuItem.scss';

function MenuItem ({ action, icon }) {
    return (
        <div onClick={action} className="menu-item">
            <i className={icon}></i>
        </div>
    );
};

export default MenuItem;
