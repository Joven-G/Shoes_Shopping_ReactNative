import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {Box, Image, Center, VStack} from 'native-base';

const width = Dimensions.get('screen').width;

const OfferPoster = () => {
  return (
    <VStack
      space={2}
      justifyContent="center"
      alignItems="center"
      safeAreaTop
      mb={3}>
      <Image
        height={200}
        borderRadius={10}
        width={width - 15}
        alt="offer_poster"
        source={{
          uri: 'https://img.freepik.com/free-psd/black-friday-banner-with-discounts-3d-rendering_1419-2424.jpg?w=1480&t=st=1691647904~exp=1691648504~hmac=849df2ede430d5dfa3e68f41f202ab5f14874676f2d0a041dbdca6fc8353f3eb',
        }}
      />
    </VStack>
  );
};

export default OfferPoster;
