import React, { useState, useEffect } from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    
    const [showMenu, updateShowMenu] = useState(false);
    
    const handleMenubarClick = () => {
        console.log('Menubar Click');

        if (showMenu === false) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }
        const handleWindowResize = () => {
        if (window.innerWidth > 700) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }
    useEffect (()=>{
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
    },[]);
    return (
        <div className = "Nav" >
            <div className = 'menubar' onClick = { handleMenubarClick }>
                <FontAwesomeIcon icon={  faBars } /> 
                
                {/* <div className="menulinks">
                    <div className = "item"> home </div>
                    <div className = "item"> catalog </div>
                    <div className = "item"> creat account </div>
                    <div className = "item"> log in  </div>
                </div> */}
                
            </div>
            { showMenu && 
            <div className = "links" >
                <div className = "link"> home </div>
                <div className = "link"> catalog </div>
                <div className = "link"> log in </div>
                <div className = "link"> creat account </div>
            </div>
            }
        </div>
    )
};

export default Nav;