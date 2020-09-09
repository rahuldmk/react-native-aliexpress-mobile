import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
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


const WishList: () => React$Node = () => {
    
    const bg = {
        background: themes.COLORS.white
    };

    return (
        <View style={[styles.container,bg]}>
            <Image style={styles.logo} source={images.logo} />
        </View>
    )
}

export default WishList;