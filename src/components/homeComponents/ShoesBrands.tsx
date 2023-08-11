import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Box, Image, Center, Text, Avatar, FlatList} from 'native-base';
import {PRODUCTS_LIST} from '../../data/shoesBrand';

const ShoesBrands = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <Box>
      <FlatList
        horizontal={true}
        data={PRODUCTS_LIST}
        renderItem={({item}) => {
          const isSelected = selectedItem === item.id.toString();
          return (
            <TouchableOpacity onPress={() => setSelectedItem(item.id)}>
              <Box
                p={7}
                m={3}
                alignItems={'center'}
                rounded={'full'}
                bg={isSelected ? '#1E1E1E':'#FFFF'}
                alignSelf={'center'}>
                <Image
                  tintColor={isSelected?'#FFFFFF':'#1E1E1E'}
                  h={10}
                  w={10}
                  alt="brand_logo"
                  resizeMode="contain"
                  source={{uri: item.imageUrl}}
                />
              </Box>
            </TouchableOpacity>
          );
        }}
      />
    </Box>
  );
};

export default ShoesBrands;
