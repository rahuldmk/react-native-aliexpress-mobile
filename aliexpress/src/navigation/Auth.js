import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ResetPassword, SignUp, SignIn } from '../screen/index';
const Stack = createStackNavigator();
const Auth = () =>{
    return(
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
    )
}

export default Auth;