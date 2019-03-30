import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import HeaderBar from '../components/headerBar';
import TitleBar from '../components/titleBar';
import SwitchElement from '../components/switchElement';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderBar />
                <TitleBar />
                <SwitchElement />
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
    },

    regularText: {
        fontFamily: 'regular',
        color: '#393939',
    },
    mediumText: {
        fontFamily: 'medium',
        color: '#393939',
    },
    lightText: {
        fontFamily: 'light',
        color: '#393939',
    },

    titleSection: {
        flex: 1,
        width: '100%',
        margin: scale(20),
        flexDirection: 'row',
        maxHeight: verticalScale(20),
    },

    roomTab: {
        flex: 1,
        width: '100%',
    },
});
