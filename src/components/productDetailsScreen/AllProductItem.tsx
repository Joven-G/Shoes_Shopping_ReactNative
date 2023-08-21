import {
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {
  Box,
  Center,
  FlatList,
  Flex,
  Text,
  Image,
  Input,
  ScrollView,
  Checkbox,
} from 'native-base';
import {ProductData} from '../../data/shoesData';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackPramList} from '../../screens/screen/Home';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetRefProps} from '../alertDialog/BottomSheet';
import {CheckoutNow} from '../alertDialog/index';
type DetailsProps = NativeStackScreenProps<RootStackPramList, 'AllProducts'>;

const scrennWidth = Dimensions.get('screen').width;
const AllProductItem = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackPramList>>();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [productCountCart, setProductCountCart] = useState<number>(0);

  const productAdd = () => {
    setProductCountCart(productCountCart + 1);
  };
  const productSubtract = () => {
    setProductCountCart(productCountCart - 1);
  };

  const SelectItemCheckbox = () => {
    console.log('checked');
  };

  const backButton = () => {
    navigation.goBack();
  };

  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-350);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Box>
        <Flex
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          p={2}>
          <Box
            p={2}
            borderWidth={1.5}
            borderColor={'#aeaeae'}
            rounded={'md'}
            m={1}>
            <TouchableOpacity onPress={backButton}>
              <Icon name="chevron-left" size={25} color={'#1E1E1E'} />
            </TouchableOpacity>
          </Box>

          <Box>
            <Text fontSize={22} fontWeight={'800'}>
              Cart
            </Text>
          </Box>
          <Box
            p={2}
            borderWidth={1.5}
            borderColor={'#aeaeae'}
            rounded={'md'}
            m={1}>
            <TouchableOpacity>
              <Icon name="location-pin" size={25} color={'#1E1E1E'} />
            </TouchableOpacity>
          </Box>
        </Flex>

        <Box m={6}>
          <Flex
            flexDirection={'row'}
            alignItems={'center'}
            bg={'#d8d8d8'}
            rounded={'md'}>
            <Input
              w={{
                md: '10%',
              }}
              InputLeftElement={
                <Icon name="search" size={30} color={'#818181'} />
              }
              placeholderTextColor={'#ffffff'}
              placeholder="Find something in your cart..."
            />
          </Flex>
        </Box>
        <Box width={scrennWidth - 1} mb={'90%'}>
          <FlatList
            horizontal={false}
            data={ProductData}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <Box
                  m={2}
                  p={3}
                  flexDirection={'row'}
                  borderBottomWidth={3}
                  borderBottomColor={'#9f9f9f'}
                  borderRadius={'1'}>
                  <Box rounded="lg">
                    <TouchableWithoutFeedback
                      onPress={() => {
                        navigation.navigate('ProductDetails', {
                          product: item,
                        });
                      }}>
                      <Image
                        h={100}
                        w={100}
                        opacity={0.8}
                        bg={'#5F5F5F'}
                        rounded={'md'}
                        resizeMode="contain"
                        source={{uri: item.imageUrl}}
                        alt="showes_image"
                      />
                    </TouchableWithoutFeedback>
                  </Box>

                  <Box
                    ml={4}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    width={'75%'}>
                    <Box>
                      <Text bold fontSize={16} color={'#1E1E1E'}>
                        {item.title}
                      </Text>

                      <Text>{item.showsType}</Text>
                      <Flex
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        alignItems={'baseline'}>
                        <Flex flexDirection={'row'} alignItems={'baseline'}>
                          <Text
                            fontWeight={'900'}
                            fontSize={20}
                            color={'#1E1E1E'}>
                            ₹{item.origilanPrice}
                          </Text>
                          <Text color={'#5F5F5F'} strikeThrough bold ml={'2'}>
                            ₹{item.discountPrice}
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>
                    <Box alignItems={'flex-end'} p={'1'}>
                      <Box p={1}>
                        <Checkbox
                          value="selct_item"
                          size={'md'}
                          aria-label='label'
                          colorScheme="muted"
                          defaultIsChecked
                          onChange={() => SelectItemCheckbox()}
                        />
                      </Box>
                      <Box display={'flex'} flexDirection={'row'} mt={5}>
                        <TouchableOpacity onPress={() => productAdd()}>
                          <Text
                            bg={'#1E1E1E'}
                            color={'#FFFFFF'}
                            p={1}
                            fontSize={15}
                            fontWeight={'900'}
                            w={7}
                            textAlign={'center'}
                            rounded={4}>
                            +
                          </Text>
                        </TouchableOpacity>
                        <Text
                          color={'#1E1E1E'}
                          p={1}
                          fontSize={15}
                          fontWeight={'900'}
                          w={7}
                          textAlign={'center'}
                          rounded={4}>
                          {productCountCart}
                        </Text>
                        <TouchableOpacity onPress={() => productSubtract()}>
                          <Text
                            bg={'#1E1E1E'}
                            color={'#FFFFFF'}
                            p={1}
                            fontSize={15}
                            fontWeight={'900'}
                            w={7}
                            textAlign={'center'}
                            rounded={4}>
                            -
                          </Text>
                        </TouchableOpacity>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            }}
          />
        </Box>
        <BottomSheet ref={ref}>
          <Box style={{flex: 1, backgroundColor: '#1E1E1E'}}>
            <CheckoutNow />
          </Box>
        </BottomSheet>
      </Box>
    </GestureHandlerRootView>
  );
};

export default AllProductItem;
