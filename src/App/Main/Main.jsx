import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';

import Colors from '../Pages/Home//Colors/Colors.jsx';
import Account from '../Pages/Account/Account.jsx';
import Catalog from '../Pages/Catalog/Catalog.jsx';
import Login from '../Pages/Login/Login.jsx';

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path='/account' >
                    <Account/>
                </Route>
                <Route path='/catalog'>
                    <Catalog/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/'> 
                    
                    <Colors/>
                </Route>
            </Switch>
            
        </div>
    )
};

export default Main;