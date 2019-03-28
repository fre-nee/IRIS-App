import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import NavigationRoute from './config/navigationRoute';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    async componentDidMount() {
        StatusBar.setHidden(true);
        await Expo.Font.loadAsync({
            regular: require('./assets/fonts/Poppins-Regular.ttf'),
            medium: require('./assets/fonts/Poppins-Medium.ttf'),
            light: require('./assets/fonts/Poppins-Light.ttf'),
            Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
        this.setState({ loaded: true });
    }

    render() {
        console.log(this.state.loaded);
        return (
            <Provider store={store}>
                {this.state.loaded ? (
                    <View style={styles.container}>
                        <NavigationRoute />
                    </View>
                ) : (
                    <Expo.AppLoading />
                )}
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        fontFamily : 'regular',
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
});
