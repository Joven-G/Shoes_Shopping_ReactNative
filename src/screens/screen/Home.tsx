import {View, Text} from 'react-native';
import {
  ProfileDetails,
  SearchFilter,
  LocationDetails,
  OfferPoster,
  ShoesBrands,
  ShoesDiscountCount,
} from '../../components/homeComponents/index';

const Home = () => {
  return (
    <>
      <ProfileDetails />
      <SearchFilter />
      <LocationDetails />
      <OfferPoster />
      <ShoesBrands />
      <ShoesDiscountCount />
      
    </>
  );
};

export default Home;
