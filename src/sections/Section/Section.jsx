import React from 'react';
import './Section.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Section({ extraClass, headerIcon, sectionHeader, children }) {
    const sectionClassName = `section ${extraClass ? extraClass : ''}`;
    
    return (
        <div className="section-wrapper">
            <div className={sectionClassName}>
                <h2 className="section-header">
                <FontAwesomeIcon icon={headerIcon}/>
                    {/* {React.cloneElement(headerIcon, { classes: { root: 'section-header-icon' } })} */}
                    {sectionHeader}
                </h2>
                <div className="section-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Section;
