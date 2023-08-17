import {View, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  AlertDialog,
  Box,
  Button,
  FlatList,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import {shoesSize} from '../../data/shoesSize';

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
                data={shoesSize}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <Box
                    borderBottomWidth="1"
                    _dark={{
                      borderColor: 'muted.50',
                    }}
                    borderColor="muted.800"
                    py="2">
                    <HStack flexDirection={'row'} space={'60%'} textAlign={'center'}>
                      <Text color="coolGray.800" bold >
                        {item.size}
                      </Text>

                      <Text color="coolGray.600">{item.cm}</Text>
                      <Spacer />
                    </HStack>
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
