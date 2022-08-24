import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Container, Menu, Body } from './AppStyled.js';

import Cart from './components/Cart';

import MenuItem  from './components/MenuItem';
import HomeScreen from './pages/HomeScreen';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Fragment>
                <Container>
                    <Menu>
                        <MenuItem icon="/assets/store.png" link="/menu" />
                        <MenuItem icon="/assets/profile.png" link="/" />
                       
                        {/* <MenuItem icon="/assets/sol.png" link="/theme" /> */}
                    </Menu>

                    <Body>
                        <Switch>
                            <Route exact path="/"> <Login /> </Route>
                            <Route path="/menu"> <HomeScreen /> </Route> 
                            <Route path="/cadastro"> <Cadastro /> </Route>
                        </Switch>
                    </Body>

                    <Cart />
                </Container>
            </Fragment>
        </BrowserRouter>
    );
}