import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NativeBaseProvider, Text, Box, Slide, Slider} from 'native-base';
import ButtomTab from './src/screens/navigationScreen/ButtomTab';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <ButtomTab />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
