import {View, TouchableOpacity,FlatList,SectionList} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  AlertDialog,
  Box,
  Button,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import {ShoesSize} from '../../data/shoesSize';

const SizeChart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  return (
    <Box>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <Text fontSize={'18'} underline>
          Size chart
        </Text>
      </TouchableOpacity>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Size chart</AlertDialog.Header>
          <AlertDialog.Body>
            <Box>
              <HStack justifyContent={'space-between'}>
                <Text underline>Size(UK)</Text>
                <Text underline>To Fit Foot Length(cm)</Text>
              </HStack>
              <FlatList
                data={ShoesSize}
                horizontal={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <Box borderBottomWidth="1" borderColor="#c3c3c3" ml={3} mr={3} py="2" display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                    <Text color={"#1E1E1E"} bold>
                      {item.size}
                    </Text>

                    <Text color={'#828282'}>{item.cm}</Text>
                  </Box>
                )}
              />
            </Box>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}>
                Cancel
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Box>
  );
};

export default SizeChart;
