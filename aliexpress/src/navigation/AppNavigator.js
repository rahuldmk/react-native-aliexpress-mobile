import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './Auth'
const AppNavigation = () => {
    return (
        <NavigationContainer>
           <Auth />
        </NavigationContainer>
    );
}

export default AppNavigation;