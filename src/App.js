import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Container, Menu, Body } from './AppStyled.js';

import Cart from './components/Cart';

import MenuItem  from './components/MenuItem';
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import Signin from './pages/Signin';
import Signup from './pages/Signup';


export default ({Item}) => {
    const name = useSelector(state => state.user.name);

    const Private = ({Item}) => {
        console.log(Item);
        const signed = true;

        return signed == true ? <Item /> : <Signin />
    }

    return (
        <BrowserRouter>
            <Fragment>
                <Container>
                    <Menu>
                        <MenuItem icon="/assets/store.png" link="/" />
                        {/* <MenuItem icon="/assets/profile.png" link="/login" /> */}
                        {/* <MenuItem icon="/assets/sol.png" link="/theme" /> */}
                    </Menu>

                    <Body>
                        <Switch>
                            <Route exact path="/"> <HomeScreen /> </Route>
                            {/* 
                            <Route path="/login">
                                <div>
                                   Login
                                </div>
                            </Route> */}
                            <Route exact path="/" element={<HomeScreen />} />
                            <Route path="/" element={<Signin/>} />
                            <Route exact path="/signup" element={<Signup />} />
                            <Route path="*" element={<Signin />} />
                        </Switch>
                    </Body>

                    <Cart />
                </Container>
            </Fragment>
        </BrowserRouter>
    );
}