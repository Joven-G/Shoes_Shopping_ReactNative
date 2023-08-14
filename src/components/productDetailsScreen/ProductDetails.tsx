import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../../screens/screen/Home';
import {useNavigation} from '@react-navigation/native';
import {Box, Flex, Image, ScrollView, Text, Divider, Center} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

type DetailsProps = NativeStackScreenProps<RootStackPramList, 'ProductDetails'>;

const ProductDetails = ({route}: DetailsProps) => {


  const {product} = route.params;
  const navigation = useNavigation();
  // console.log(route.name);
  
  const [showFullContent, setShowFullContent] = useState(false);

  const maxLines = 2;

  const toggleShowContent = () => {
    setShowFullContent(!showFullContent);
  };

  const backButton = () => {
    navigation.goBack();
  };

  return (
    <Box>
      {/* Prodct Stack Like back Fab */}
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
            Shoes Detail
          </Text>
        </Box>
        <Box
          p={2}
          borderWidth={1.5}
          borderColor={'#aeaeae'}
          rounded={'md'}
          m={1}>
          <TouchableOpacity>
            <Icon name="bookmark" size={25} color={'#1E1E1E'} />
          </TouchableOpacity>
        </Box>
      </Flex>

      {/* Product Details Box */}
      <ScrollView>
        {/* profuct Image */}
        <Box mt={3} pl={6}>
          <Image
            h={350}
            w={400}
            opacity={0.9}
            bg={'#5F5F5F'}
            roundedBottomLeft={22}
            roundedTopLeft={22}
            resizeMode="contain"
            alt="product_image"
            source={{uri: product.imageUrl}}
          />
        </Box>

        {/* ProductTitle */}
        <Flex
          flexDirection={'row'}
          justifyContent={'space-between'}
          mt={1}
          pl={6}
          p={3}>
          <Box>
            <Text fontSize={22} fontWeight={'800'} color="#1E1E1E">
              {product.title}
            </Text>
            <Text fontSize={20} fontWeight={'700'} color="#a7a7a7">
              {product.showsType}
            </Text>
          </Box>
          <Box>
            <Text
              textAlign={'right'}
              fontSize={16}
              fontWeight={'800'}
              color="#808080"
              strikeThrough>
              ₹{product.discountPrice}
            </Text>
            <Text
              textAlign={'right'}
              fontSize={24}
              fontWeight={'700'}
              color="#1E1E1E">
              ₹{product.origilanPrice}
            </Text>
          </Box>
        </Flex>

        {/* Shoes Left,etc */}
        <Flex flexDirection={'row'} pl={3}>
          <Box flexDirection={'row'} ml={3} alignItems={'center'}>
            <Image
              h={6}
              w={6}
              alt="brand_logo"
              resizeMode="contain"
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/5479/5479005.png',
              }}
            />
            <Text bold>{product.showsLeft} Left</Text>
          </Box>
          {/* sold */}
          <Box flexDirection={'row'} ml={3} alignItems={'center'}>
            <Image
              h={6}
              w={6}
              alt="brand_logo"
              resizeMode="contain"
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png',
              }}
            />
            <Text bold>{product.showsSold} Sold</Text>
          </Box>
          {/* Review */}
          <Box flexDirection={'row'} ml={3} alignItems={'center'}>
            <Image
              h={6}
              w={6}
              alt="brand_logo"
              resizeMode="contain"
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/616/616490.png',
              }}
            />
            <Text bold>{product.rating} (280 reviews)</Text>
          </Box>
        </Flex>

        <Center>
          <Divider my={5} w={'90%'} />
        </Center>
        {/* Description */}
        <Box ml={4}>
          <Text fontSize={'24'} fontWeight={'800'}>
            Description
          </Text>
          <Text fontSize={'15'} bold color={'#808080'} numberOfLines={showFullContent ? undefined : maxLines}>
            {product.description}
          </Text>

          {product.description.length > maxLines && (
            <TouchableOpacity onPress={toggleShowContent}>
              <Text fontSize={'15'} bold color={'#3d3d3d'}>
                {showFullContent ? 'Read Less' : 'Read More'}
              </Text>
            </TouchableOpacity>
          )}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ProductDetails;
