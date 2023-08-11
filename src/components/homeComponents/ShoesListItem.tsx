import {
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {ProductData} from '../../data/shoesData';
import {Box, FlatList, Text, Flex, Image, Center} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const scrennWidth = Dimensions.get('screen').width;

const ShoesListItem = () => {
  return (
    <Box alignItems={'center'} width={scrennWidth - 1}>
      <FlatList
        horizontal={false}
        numColumns={2}
        data={ProductData.slice(0, 4)}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Box w={'50%'} p={2}>
              <Box rounded="lg">
                <TouchableWithoutFeedback onPress={() => console.log('')}>
                  <Image
                    h={150}
                    opacity={0.8}
                    bg={'#5F5F5F'}
                    w={'xs'}
                    rounded={'md'}
                    resizeMode="contain"
                    source={{uri: item.imageUrl}}
                    alt="showes_image"
                  />
                </TouchableWithoutFeedback>

                <Center
                  rounded={'full'}
                  position="absolute"
                  right="7"
                  p={1}
                  bg="#FFFFFF"
                  top={'4'}>
                  <TouchableOpacity>
                    {item.favborite ? (
                      <Icon name="bookmark" size={25} color={'#1E1E1E'} />
                    ) : (
                      <Icon
                        name="bookmark-outline"
                        size={25}
                        color={'#1E1E1E'}
                      />
                    )}
                  </TouchableOpacity>
                </Center>
              </Box>

              <Box>
                <Text bold fontSize={16} color={'#1E1E1E'}>
                  {item.title}
                </Text>
                <Flex
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                  alignItems={'baseline'}>
                  <Flex flexDirection={'row'} alignItems={'baseline'}>
                    <Text fontWeight={'900'} fontSize={20} color={'#1E1E1E'}>
                      ₹{item.origilanPrice}
                    </Text>
                    <Text color={'#5F5F5F'} strikeThrough bold ml={'2'}>
                      ₹{item.discountPrice}
                    </Text>
                  </Flex>

                  <Box>
                    <Text bold>⭐{item.rating}</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default ShoesListItem;
