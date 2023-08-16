import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NativeBaseProvider, Text, Box, Slide, Slider} from 'native-base';
import ButtomTab from './src/screens/navigationScreen/ButtomTab';

import {NavigationContainer} from '@react-navigation/native';
import { Home } from './src/screens/screen';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {/* <ButtomTab /> */}
        <Home />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
