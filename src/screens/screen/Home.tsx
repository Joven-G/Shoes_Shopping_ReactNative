import { View, Text } from 'react-native'
import {ProfileDetails,SearchFilter} from '../../components/homeComponents/index'


const Home = () => {
  return (
    <>
      <ProfileDetails />
      <SearchFilter />
    </>
  )
}

export default Home