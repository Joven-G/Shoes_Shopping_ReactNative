import {View} from 'react-native';
import React from 'react';
import {Box, Center, Divider, HStack, Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CheckoutNow = () => {
  return (
    <Box>
      <Box p={4}>
        <HStack justifyContent={'space-between'}>
          <Text fontSize={16} bold color={'#FFFFFF'}>
            Subtotal product
          </Text>
          <Text fontSize={16} bold color={'#FFFFFF'}>
            ₹512
          </Text>
        </HStack>
        <HStack justifyContent={'space-between'}>
          <Text color={'#FFFFFF'}>Fee</Text>
          <Text color={'#FFFFFF'}>₹5</Text>
        </HStack>
      </Box>

      <Center>
        <Divider
          color={'#FFFFFF'}
          my={5}
          w={'90%'}
          thickness="3"
          rounded={'md'}
        />
      </Center>

      <Box p={4}>
        <HStack justifyContent={'space-between'}>
          <Text fontSize={16} bold color={'#FFFFFF'}>
            Total
          </Text>
          <Text fontSize={16} bold color={'#FFFFFF'}>
            ₹517
          </Text>
        </HStack>
      </Box>

      <Box bg={'#FFFFFF'} m={4} p={3} rounded={'md'}>
        <TouchableOpacity>
          <Text color={'#1E1E1E'} textAlign={'center'} fontSize={20} bold>
            Checkout now
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default CheckoutNow;
