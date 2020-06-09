import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Home from '../Pages/Home/Home.jsx';
import Account from '../Pages/Account/Account.jsx';
//import Catalog from '../Pages/Catalog/Catalog.jsx';
import Login from '../Pages/Login/Login.jsx';
import Hairphotos from '../Pages/Home/Hair/Hairphotos/Hairphotos.jsx';
import Facepohotos from '../Pages/Home/Face/Facephotos/Facephotos.jsx';
import Bodyphotos from '../Pages/Home/Body/Bodyphotos/Bodyphotos.jsx';

const Catalog = lazy(() => import('../Pages/Catalog/Catalog.jsx'));

const Main = () => {
    return (
        <div className='main'>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path='/login' >
                        <Login/>
                    </Route>
                    <Route path='/catalog'>
                        <Catalog/>
                    </Route>
                    <Route path='/account'>
                        <Account/>
                    </Route>
                    <Route path='/hairphotos' >
                        <Hairphotos/>
                    </Route> 
                    <Route path='/facephotos' >
                        <Facepohotos/>
                    </Route>
                    <Route path='/bodyphotos' >
                        <Bodyphotos/>
                    </Route>
                    <Route path='/'> 
                        <Home/>
                    </Route>
                </Switch>
            </Suspense>
        </div>
    )
};
export default Main;