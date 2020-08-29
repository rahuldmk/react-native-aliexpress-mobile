/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { Splash } from './src/screen/index';

const App: () => React$Node = () => {

  state = {
    isLoadingComplete: true
  }

  if (state.isLoadingComplete) {
    return (
      <Splash />
    );
  }


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
