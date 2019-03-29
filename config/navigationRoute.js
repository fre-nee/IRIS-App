import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';

import Home from '../screens/home';

class NavigationRoute extends Component {
    render() {
        return (
            <NativeRouter>
                <Route exact path="/" component={Home} />
            </NativeRouter>
        );
    }
}

export default NavigationRoute;
