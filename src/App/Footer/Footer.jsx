import React from 'react';
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare  } from '@fortawesome/free-brands-svg-icons';
import {  faInstagram } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div className="Footer">
            <div className="icons">
                <a href="https://m.facebook.com/moroccansense">
                    <FontAwesomeIcon icon={ faFacebookSquare } /></a>
                <a href="https://www.instagram.com/moroccansense.us/">
                    <FontAwesomeIcon icon={ faInstagram } /></a>
            </div>
        </div>
    )
};

export default Footer;