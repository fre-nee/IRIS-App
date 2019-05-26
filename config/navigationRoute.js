import React, { Component } from 'react';
import { NativeRouter, Route } from 'react-router-native';

import Home from '../screens/home';
import ConfigScreen from '../screens/config';

class NavigationRoute extends Component {
    render() {
        return (
            <NativeRouter>
                <Route exact path="/" component={Home} />
                <Route path="/config" component={ConfigScreen} />
            </NativeRouter>
        );
    }
}

export default NavigationRoute;
