import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Box, Image, Text, Heading, Flex, Center} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileDetails = () => {
  return (
    <Box
      flexDirection={'row'}
      justifyContent={'space-between'}
      p={3}
      alignItems={'center'}>
      <Flex direction="row" alignItems={'center'}>
        <Image
          alt="profile_Image"
          size="sm"
          rounded={'md'}
          source={{
            uri: 'https://instagram.fbbi2-2.fna.fbcdn.net/v/t51.2885-19/293364187_565805618365740_820940581388127509_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbbi2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=NMLew1VzFl0AX9J5UMF&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBLsk7qN5HjT-VOizzFOkYcPV_oEufMvy8yA8-6yHGbVg&oe=64D861A7&_nc_sid=ee9879',
          }}
        />
        <Box p={4}>
          <Text fontWeight={'medium'} color={'#5F5F5F'} fontSize={20}>
            Good to see you!
          </Text>
          <Heading fontWeight={'900'} fontSize={20}>
            Debabrata Giri
          </Heading>
        </Box>
      </Flex>
      <Flex direction="row">
        <Box p={2} borderWidth={1} borderColor={'#aeaeae'} rounded={'md'} m={1}>
          <TouchableOpacity>
            <Icon name="notifications" size={30} color={'#1E1E1E'} />
          </TouchableOpacity>
          <Center
            bg="#e00000"
            _text={{
              color: 'white',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            rounded={'full'}
            position="absolute"
            right="1"
            px="1.5">
            3
          </Center>
        </Box>
        <Box p={2} borderWidth={1} borderColor={'#aeaeae'} rounded={'md'} m={1}>
          <TouchableOpacity>
            <Icon name="mail" size={30} color={'#1E1E1E'} />
          </TouchableOpacity>
          <Center
            bg="#e00000"
            _text={{
              color: 'white',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            rounded={'full'}
            position="absolute"
            right="1"
            px="1.5">
            7
          </Center>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProfileDetails;
