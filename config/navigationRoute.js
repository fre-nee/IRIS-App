import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Home from '../screens/home';

class NavigationRoute extends Component {
    render() {
        return (
            <View>
                <Home />
            </View>
        );
    }
}

export default NavigationRoute;

const styles = StyleSheet.create({
    fonts: {
        fontFamily: 'regular',
    },
});
