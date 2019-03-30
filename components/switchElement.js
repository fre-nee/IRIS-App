import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import ToggleSwitch from '../toggle-switch-react-native';

class SwitchElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchOn1: false,
            switchOn2: false,
            switchOn3: false,
            switchOn4: false,
        };
    }

    pressSwitch1 = () => {
        this.setState({
            switchOn1: !this.state.switchOn1,
        });
        if (this.state.switchOn1) {
            fetch('http://192.168.43.113/setpins', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ pin: '0', status: '1' }),
            })
                .then(function(res) {
                    console.log(res);
                })
                .catch(function(res) {
                    console.log(res);
                });
        } else {
            fetch('http://192.168.43.113/setpins', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ pin: '0', status: '0' }),
            })
                .then(function(res) {
                    console.log(res);
                })
                .catch(function(res) {
                    console.log(res);
                });
        }
    };

    pressSwitch2 = () => {
        this.setState({
            switchOn2: !this.state.switchOn2,
        });
        if (this.state.switchOn2) {
            fetch('http://192.168.43.113/setpins', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ pin: '1', status: '1' }),
            })
                .then(function(res) {
                    console.log(res);
                })
                .catch(function(res) {
                    console.log(res);
                });
        } else {
            fetch('http://192.168.43.113/setpins', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ pin: '1', status: '0' }),
            })
                .then(function(res) {
                    console.log(res);
                })
                .catch(function(res) {
                    console.log(res);
                });
        }
    };

    pressSwitch3 = () => {
        this.setState({
            switchOn3: !this.state.switchOn3,
        });
        if (this.state.switchOn3) {
            fetch('http://192.168.43.113/setpins', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ pin: '2', status: '1' }),
            })
                .then(function(res) {
                    console.log(res);
                })
                .catch(function(res) {
                    console.log(res);
                });
        } else {
            fetch('http://192.168.43.113/setpins', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ pin: '2', status: '0' }),
            })
                .then(function(res) {
                    console.log(res);
                })
                .catch(function(res) {
                    console.log(res);
                });
        }
    };

    pressSwitch4 = () => {
        this.setState({
            switchOn4: !this.state.switchOn4,
        });
        if (this.state.switchOn4) {
            fetch('http://192.168.43.113/setpins', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ pin: '3', status: '1' }),
            })
                .then(function(res) {
                    console.log(res);
                })
                .catch(function(res) {
                    console.log(res);
                });
        } else {
            fetch('http://192.168.43.113/setpins', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ pin: '3', status: '0' }),
            })
                .then(function(res) {
                    console.log(res);
                })
                .catch(function(res) {
                    console.log(res);
                });
        }
    };

    render() {
        return (
            <View style={styles.switchContainer}>
                <View style={styles.switchRow}>
                    <View style={styles.switchColumn}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View>
                                <Image
                                    style={styles.switchIcon}
                                    source={require('../assets/imgs/lamp-w.png')}
                                />
                            </View>
                            <View>
                                <ToggleSwitch
                                    isOn={this.state.switchOn1}
                                    onColor="#438eff"
                                    labelStyle={{
                                        color: 'black',
                                        fontWeight: '900',
                                    }}
                                    size="small"
                                    onToggle={this.pressSwitch1}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.switchName}>Lamp</Text>
                        </View>
                        <View>
                            <Text style={styles.switchStatus}>
                                {this.state.switchOn1 ? 'ON' : 'OFF'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.switchColumn}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View>
                                <Image
                                    style={styles.switchIcon}
                                    source={require('../assets/imgs/router.png')}
                                />
                            </View>
                            <View>
                                <ToggleSwitch
                                    isOn={this.state.switchOn2}
                                    onColor="#438eff"
                                    labelStyle={{
                                        color: 'black',
                                        fontWeight: '900',
                                    }}
                                    size="small"
                                    onToggle={this.pressSwitch2}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.switchName}>Router</Text>
                        </View>
                        <View>
                            <Text style={styles.switchStatus}>
                                {this.state.switchOn2 ? 'ON' : 'OFF'}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.switchRow}>
                    <View style={styles.switchColumn}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View>
                                <Image
                                    style={styles.switchIcon}
                                    source={require('../assets/imgs/tv.png')}
                                />
                            </View>
                            <View>
                                <ToggleSwitch
                                    isOn={this.state.switchOn3}
                                    onColor="#438eff"
                                    labelStyle={{
                                        color: 'black',
                                        fontWeight: '900',
                                    }}
                                    size="small"
                                    onToggle={this.pressSwitch3}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.switchName}>TV</Text>
                        </View>
                        <View>
                            <Text style={styles.switchStatus}>
                                {this.state.switchOn3 ? 'ON' : 'OFF'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.switchColumn}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View>
                                <Image
                                    style={styles.switchIcon}
                                    source={require('../assets/imgs/air.png')}
                                />
                            </View>
                            <View>
                                <ToggleSwitch
                                    isOn={this.state.switchOn4}
                                    onColor="#438eff"
                                    labelStyle={{
                                        color: 'black',
                                        fontWeight: '900',
                                    }}
                                    size="small"
                                    onToggle={this.pressSwitch4}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.switchName}>A. C.</Text>
                        </View>
                        <View>
                            <Text style={styles.switchStatus}>
                                {this.state.switchOn4 ? 'ON' : 'OFF'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default SwitchElement;
const styles = StyleSheet.create({
    switchContainer: {
        flex: 1,
        flexDirection: 'column',
        maxHeight: scale(300),
    },

    switchRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    switchColumn: {
        backgroundColor: '#ffffff',
        width: scale(130),
        height: verticalScale(130),
        maxWidth: scale(130),
        maxHeight: verticalScale(130),
        margin: scale(10),
        borderRadius: scale(20),
        padding: scale(15),
    },

    switchIcon: {
        width: scale(35),
        height: scale(35),
    },

    switchName: {
        fontFamily: 'medium',
        fontSize: scale(18),
        color: '#393939',
    },

    switchStatus: {
        fontFamily: 'regular',
        fontSize: scale(12),
        color: '#a6a6a6',
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
