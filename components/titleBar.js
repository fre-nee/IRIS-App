import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';


export default function TitleBar(props) {
     console.log(props)
     return (
          <View style={styles.titleSection}>
               <Text style={[styles.mediumText, { flex: 3 }]}>
                    All Rooms
               </Text>
               <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableHighlight
                         activeOpacity={0.5}
                         onPress={() => props.props.history.push('/config')}
                         underlayColor="'rgba(255, 255, 255, 0)'"
                    >
                    
                         <Ionicons
                              name="md-settings"
                              style={{ marginRight: scale(10) }}
                              size={scale(20)}
                         />
                    </TouchableHighlight>
                    <TouchableHighlight
                         activeOpacity={0.5}
                         onPress={() => console.log('Add New')}
                         underlayColor="'rgba(255, 255, 255, 0)'"
                    >
                         <Ionicons name="ios-add" size={scale(20)} />
                    </TouchableHighlight>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({

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
