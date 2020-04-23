import React, { useState, useEffect } from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

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
    const handleNavLinkClick = () => {
        console.log('handleNavLinkClick clicked');
        if (window.innerWidth < 700) {
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
                
            </div>
            { showMenu && 
            <div className = "links" onClick = { handleNavLinkClick } >
                <NavLink className='link' to='/'exact >home</NavLink>
                <NavLink className='link' to='/catalog'>catalog</NavLink>
                <NavLink className='link' to='/account'>create account</NavLink>
                <NavLink className='link' to='/login'>log in</NavLink>
            </div>
            }
        </div>
    )
};
export default Nav;