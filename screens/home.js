import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
               <View>
                    <Text>Hello</Text>
               </View>
                <Text>Home Screen App</Text>
                <Button title="Learn More" />
                    
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
    },
});
