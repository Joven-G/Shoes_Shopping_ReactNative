import {View, Text, StyleSheet} from 'react-native';
import {ScrollView, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import HomeMainPage from '../../components/homeComponents/HomeMainPage';
import ProductDetails from '../../components/productDetailsScreen/ProductDetails';
import Shoes from './Shoes';
import AllProductItem from '../../components/productDetailsScreen/AllProductItem';

interface Product {
  id:string;
  title: string;
  imageUrl: string;
  origilanPrice: number;
  discountPrice: number;
  description: string;
  rating: number;
  favborite: boolean;
  showsType: string;
  showsLeft: number;
  showsSold: number;
}

export type RootStackPramList = {
  ProductHome: undefined;
  ProductDetails: {product: Product};
  AllProducts: undefined;
  AllProductsBtn: undefined;
};

const Stack = createNativeStackNavigator<RootStackPramList>();

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductHome"
          component={HomeMainPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllProducts"
          component={AllProductItem}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
