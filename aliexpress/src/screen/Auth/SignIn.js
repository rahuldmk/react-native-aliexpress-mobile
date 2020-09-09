import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Button, Text,Input } from '../../components/index';
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


const SignIn: () => React$Node = ({navigation}) => {
    
    return (
        <Block color={themes.COLORS.white} padding={15} scroll>
        <Block flex={2} center middle marginBottom={40}>
            <Text><Text h2 color={themes.COLORS.orange} bold>Desi</Text><Text h2  color={themes.COLORS.red}>Express</Text></Text>
            <Text color="grey">Smarter Shopping, Better Living!</Text>
        </Block>
        <Block flex={1} >
            <Input placeholder="Email" email style={{marginBottom:5}} borderColor="grey"/>
            <Input placeholder="Password" password style={{marginBottom:5}} borderColor="grey" />
        </Block>
        <Block marginTop={40} flex={1}>
            <Button color={themes.COLORS.red} onPress={()=>navigation.navigate('SignUp')}>
                <Text center color="white">Login</Text>
            </Button>
        </Block>

    </Block>
    )
}

export default SignIn;