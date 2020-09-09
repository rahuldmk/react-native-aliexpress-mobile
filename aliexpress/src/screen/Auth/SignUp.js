import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Button, Text, Input } from '../../components/index';
import * as themes from '../../components/theme';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


const SignUp: () => React$Node = ({ navigation }) => {

    return (
        <Block color={themes.COLORS.white} padding={20} scroll>
            <Block flex={2} center middle marginBottom={40} marginTop={50}>
                <Text><Text h2 color={themes.COLORS.orange} bold>Desi</Text><Text h2 color={themes.COLORS.red}>Express</Text></Text>
                <Text color="grey">Smarter Shopping, Better Living!</Text>
            </Block>
            <Block flex={2} >
                <Input placeholder="Email" email style={{ marginBottom: 5 }} borderColor="grey" />
                <Input placeholder="First Name" style={{ marginBottom: 5 }} borderColor="grey" />
                <Input placeholder="Last Name" style={{ marginBottom: 5 }} borderColor="grey" />
                <Input placeholder="Password" password style={{ marginBottom: 5 }} borderColor="grey" />
                <Input placeholder="Reenter Password" password style={{ marginBottom: 5 }} borderColor="grey" />
            </Block>
            <Block marginTop={40} flex={0.5}>
                <Button color={themes.COLORS.red} onPress={() => navigation.navigate('SignIn')}>
                    <Text center color="white">Agree & Create My Account</Text>
                </Button>
            </Block>

        </Block>
    )
}

export default SignUp;