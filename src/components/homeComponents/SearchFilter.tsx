import {View, Text} from 'react-native';
import React from 'react';
import {Box, Flex, FormControl, Input} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchFilter = () => {
  return (
    <Box>
      <Flex
        flexDirection={'row'}
        justifyContent={'space-between'}
        p={3}
        alignItems={'center'}>
        <Flex
          flexDirection={'row'}
          alignItems={'center'}
          bg={'#d8d8d8'}
          rounded={'md'}>
          <Input
            w={{
              base: '80%',
              md: '10%',
            }}
            InputLeftElement={
              <Icon name="search" size={30} color={'#1E1E1E'} />
            }
            placeholderTextColor={'#d7d7d7w'}
            placeholder="Find pair of shoes..."
          />
        </Flex>
        <Box bg={'#1E1E1E'} p={2} rounded={'md'}>
          <Icon name="filter-list" size={30} color={'#FFF'} />
        </Box>
      </Flex>
    </Box>
  );
};

export default SearchFilter;
