import React from 'react';
import './Header.scss';

import Title from './Title/Title.jsx';
import Bag from './Bag/Bag.jsx';

const Header = () => {
    return (
    <div className="header">
        <div className="comp">
            <Title />
            <Bag />
        </div>
    </div>
    )
};
export default Header;

