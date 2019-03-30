import React from 'react';
import { View, StatusBar } from 'react-native';
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
        return (
            <Provider store={store}>
                {this.state.loaded ? <NavigationRoute /> : <Expo.AppLoading />}
            </Provider>
        );
    }
}
