import {View,TouchableOpacity} from 'react-native';
import React from 'react';
import { Box,Text } from 'native-base';

const SizeChart = () => {
  return (
    <Box>
      <TouchableOpacity>
        <Text fontSize={'18'} underline>
          Size chart
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default SizeChart;
