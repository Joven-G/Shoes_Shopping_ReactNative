import {TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Box, Text} from 'native-base';

const ShoesDiscountCount = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const discountEndTime = Date.now() + 3600000;
    const initialTimeRemaining = discountEndTime - Date.now();
    setTimeRemaining(initialTimeRemaining);

    const interval = setInterval(() => {
      const updatedTimeRemaining = discountEndTime - Date.now();
      setTimeRemaining(updatedTimeRemaining);

      if (updatedTimeRemaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0',
    )}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <Box
      flexDirection={'row'}
      justifyContent={'space-between'}
      p={2}
      textAlign={'center'}
      alignItems={'center'}>
      <Box flexDirection={'row'} textAlign={'center'} alignItems={'center'}>
        <Text color={'#1E1E1E'} fontSize={20}>
          Shoescount 🔥
        </Text>

        <Box flexDirection={'row'}>
          <Text
            color={'#FFFFFF'}
            bg={'#1E1E1E'}
            p={2}
            bold
            rounded={'md'}
            maxW={12}>
            {formatTime(timeRemaining).slice(0, 2)}d
          </Text>
          <Text bold fontSize={22}>
            :
          </Text>
          <Text
            color={'#FFFFFF'}
            bg={'#1E1E1E'}
            p={2}
            bold
            rounded={'md'}
            maxW={12}>
            {formatTime(timeRemaining).slice(3, 5)}h
          </Text>
          <Text bold fontSize={22}>
            :
          </Text>
          <Text
            color={'#FFFFFF'}
            bg={'#1E1E1E'}
            p={2}
            bold
            rounded={'md'}
            maxW={12}>
            {formatTime(timeRemaining).slice(6, 8)}m
          </Text>
        </Box>
      </Box>
      <Box>
        <TouchableOpacity>
          <Text underline color={'#1E1E1E'} fontSize={20} bold>
            see all
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default ShoesDiscountCount;
