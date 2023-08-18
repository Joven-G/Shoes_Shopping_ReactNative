import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeMainPage} from '../../components/homeComponents/index';
import ButtomTab from '../navigationScreen/ButtomTab';
import {
  ProductDetails,
  AllProductItem,
} from '../../components/productDetailsScreen/index';
interface Product {
  id: string;
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
  ButtomTab: undefined;
  ProductHome: undefined;
  ProductDetails: {product: Product};
  AllProducts: undefined;
  AllProductsBtn: undefined;
};

const Stack = createNativeStackNavigator<RootStackPramList>();

const Home = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ButtomTab">
        <Stack.Screen
          name="ButtomTab"
          component={ButtomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductHome"
          component={HomeMainPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllProducts"
          component={AllProductItem}
          options={{
            headerShown: false,
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
