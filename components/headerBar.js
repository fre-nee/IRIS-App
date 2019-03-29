import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';

class HeaderBar extends Component {
    render() {
        return (
            <View style={styles.rect}>
                <Text style={[styles.lightText, styles.headerDate]}>
                    29 March 2019
                </Text>
                <Text style={[styles.mediumText, styles.weatherType]}>
                    Cloudy
                </Text>
                <Image
                    style={styles.weatherIcon}
                    source={require('../assets/imgs/Cloudy.png')}
                />
                <View style={styles.temperatureBlock}>
                    <View style={styles.tempdata}>
                        <Text style={styles.dataOf}>26 °C</Text>
                    </View>
                    <View style={styles.tempdata}>
                        <Text style={styles.dataOf}>32 °C</Text>
                    </View>
                    <View style={styles.tempdata}>
                        <Text style={styles.dataOf}>48.2 %</Text>
                    </View>
                </View>
                <View style={styles.temperatureDataBlock}>
                    <View style={styles.tempeDataBlock}>
                        <Text style={[styles.subtitle, styles.lightText]}>
                            Indoor Temp.
                        </Text>
                    </View>
                    <View style={styles.tempeDataBlock}>
                        <Text style={[styles.subtitle, styles.lightText]}>
                            Outdoor Temp.
                        </Text>
                    </View>
                    <View style={styles.tempeDataBlock}>
                        <Text style={[styles.subtitle, styles.lightText]}>
                            Outdoor Humadity
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default HeaderBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        flexDirection: 'row',
    },
    rect: {
        height: verticalScale(150),
        maxHeight:verticalScale(150),
        backgroundColor: 'rgb(255,255,255)',
        borderBottomRightRadius: 36,
        borderBottomLeftRadius: 36,
        flex: 1,
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowRadius: 16,
        shadowOpacity: 1,
        shadowOffset: {
            height: 1,
            width: 0,
        },
    },
    headerDate: {
        position: 'absolute',
        margin: scale(74),
        marginTop: verticalScale(30),
    },
    weatherType: {
        position: 'absolute',
        marginLeft: scale(70),
        marginTop: verticalScale(45),
        fontSize: 32,
    },
    weatherIcon: {
        position: 'absolute',
        marginLeft: scale(25),
        marginTop: verticalScale(42),
        width: scale(37),
        height: scale(35),
    },
    temperatureBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        marginTop: verticalScale(90),
        width: '100%',
    },
    temperatureDataBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        marginTop: verticalScale(115),
        width: '100%',
    },
    tempeDataBlock: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: scale(10),
    },
    tempdata: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: scale(10),
    },
    dataOf: {
        fontFamily: 'regular',
        fontSize: 22,
    },

    subtitle: {
        color: '#a6a6a6',
        fontSize: 12,
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
