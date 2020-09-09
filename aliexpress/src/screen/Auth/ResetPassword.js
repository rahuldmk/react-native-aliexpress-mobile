import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import * as themes from '../../components/theme';


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


const ResetPassword: () => React$Node = () => {
    
    const bg = {
        background: themes.COLORS.white
    };

    return (
        <View style={[styles.container,bg]}>
           <Text>ResetPassword</Text>
        </View>
    )
}

export default ResetPassword;