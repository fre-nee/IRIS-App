import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import HeaderBar from '../components/headerBar';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderBar />
                <Text>
                     
                </Text>
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
});
