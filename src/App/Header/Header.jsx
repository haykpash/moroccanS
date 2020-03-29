import React from 'react';
import './Header.scss';

import Title from './Title/Title.jsx';




const Header = () => {
    return (
        
        <div className="header">
            <div className="comp">
                < Title  />
            </div>
            {/* <div className="flag">
                <img src = '/img/flag.png' alt = 'flag' />
            </div> */}
        </div>
    )
};

export default Header;

