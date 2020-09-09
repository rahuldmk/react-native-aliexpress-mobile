import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import * as themes from '../components/theme';
import { images } from '../constants/index';

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'cover',
    },
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


const CustomerFeedback: () => React$Node = () => {
    
    const bg = {
        background: themes.COLORS.white
    };

    return (
        <View style={[styles.container,bg]}>
           <Text>CustomerFeedback</Text>
        </View>
    )
}

export default CustomerFeedback;