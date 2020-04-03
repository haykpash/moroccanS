import React from 'react';
import './Header.scss';

import Title from './Title/Title.jsx';
import Flag from './Flag/Flag.jsx';



const Header = () => {
    return (
    <div className="header">
        <div className="comp">
            <Title/>
            <Flag/>
        </div>
    </div>
    )
};
export default Header;

