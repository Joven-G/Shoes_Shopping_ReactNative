import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Box, Text, Flex} from 'native-base';

const LocationDetails = () => {
  return (
    <Flex
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={1}>
      <Flex flexDirection={'row'} alignItems={'center'}>
        <Icon name="location-pin" color={'#1E1E1E'} size={25} />
        <Text color="gray.500">send to:</Text>
        <Text bold>JI.kaliurang 12,karangtengah,Magelang</Text>
      </Flex>
      <TouchableOpacity>
        <Icon name="arrow-drop-down" color={'#1E1E1E'} size={30} />
      </TouchableOpacity>
    </Flex>
  );
};

export default LocationDetails;
