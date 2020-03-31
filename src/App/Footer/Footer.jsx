import React from 'react';
import './Footer.scss';
import { Switch, Route } from 'react-router-dom';

//import Snow from './Snow/Snow.jsx';
import Icons from './Icons/Icons.jsx';


const Footer = () => {
    return (
        <div className="Footer">
            <Switch> 
                {/* <Route path='/snow'>
                    < Snow />
                </Route> */}
                <Route path='/icons'>
                    < Icons />
                </Route>
            </Switch> 
        </div>
    )
};

export default Footer;