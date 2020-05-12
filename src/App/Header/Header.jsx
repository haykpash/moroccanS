import React from 'react';
import './Header.scss';

import Title from './Title/Title.jsx';
import Bag from './Bag/Bag.jsx';
import Logo from './Logo/Logo';

const Header = () => {
    return (
    <div className="header">
        <div className="comp">
            <Logo />
            <Title />
        </div>
            <Bag />
    </div>
    )
};
export default Header;

