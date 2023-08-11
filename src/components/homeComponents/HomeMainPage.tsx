import {View, Text} from 'react-native';
import React from 'react';
import {Box, ScrollView} from 'native-base';

import {
  ProfileDetails,
  SearchFilter,
  LocationDetails,
  OfferPoster,
  ShoesBrands,
  ShoesDiscountCount,
  ShoesListItem,
} from './index';

const HomeMainPage = () => {
  return (
    <Box>
      <ProfileDetails />
      <ScrollView marginBottom={'50%'}>
        <SearchFilter />
        <LocationDetails />
        <OfferPoster />
        <ShoesBrands />
        <ShoesDiscountCount />
        <ShoesListItem />
      </ScrollView>
    </Box>
  );
};

export default HomeMainPage;
