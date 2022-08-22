import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Container, Menu, Body, Footer } from './AppStyled.js';

import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';

import Cart from './components/Cart';

import MenuItem  from './components/MenuItem';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';


export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem icon="/assets/store.png" link="/" />
                    <MenuItem icon="/assets/profile.png" link="/login" />
                    <MenuItem icon="/assets/sol.png" link="/theme" />
                </Menu>

                <Body>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>

                        <PrivateRoute path="/foods">
                            <div>
                                CARDAPIO
                            </div>
                        </PrivateRoute>

                        <Route path="/login">
                            <div>
                               Login
                            </div>
                        </Route>

                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </Body>

                <Cart />
            </Container>

     
        </BrowserRouter>
    );
}