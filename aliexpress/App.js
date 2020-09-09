/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import { Splash } from './src/screen/index';
import AppNavigator  from './src/navigation/AppNavigator';

const App: () => React$Node = () => {

  state = {
    isLoadingComplete: false
  }

  return state.isLoadingComplete ? (<Splash />) : (<AppNavigator />); 

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
