import React from 'react';

import {
  Modal,

  ModalOverlay,

  ModalContent,

  ModalHeader,

  ModalFooter,
  ModalBody,

  ModalCloseButton,
  Button,

  Box,
  Text,

  VStack,
  HStack,
  Icon,
  Badge,
} from "@chakra-ui/react";


import { FaCoins } from "react-icons/fa";

const CoinModal = ({ isOpen, onClose }) => {


  return (

    <Modal isOpen={isOpen} onClose={onClose}>

      <ModalOverlay />

      <ModalContent>

        <ModalHeader>

          <VStack spacing={2}>

            <Text>Buy Coins</Text>

            <HStack spacing={1} alignItems="center"> {/* Added HStack for My Coins section */}

              <Icon as={FaCoins} color="yellow.400" boxSize={4} />

              <Text fontSize="md" fontWeight="bold">My Coins:</Text>

              <Badge colorScheme="yellow" fontSize="md">100</Badge> {/* Used Badge for coin count */}
            </HStack>

          </VStack>
        </ModalHeader>

        <ModalCloseButton />
        <ModalBody>


          <HStack spacing={4}> {/* Changed from VStack to HStack */}

            <Box p={4} borderWidth={1} borderRadius="lg" w="100%" bg="orange.200">


              <VStack spacing={3}> {/* Changed from HStack to VStack */}


                <Icon as={FaCoins} color="orange.400" boxSize={6} />

                <Text fontSize="lg" fontWeight="bold">Bronze</Text>

              </VStack>


              <Button colorScheme="orange" mt={2}>Buy</Button>

            </Box>

            <Box p={4} borderWidth={1} borderRadius="lg" w="100%" bg="gray.200">


              <VStack spacing={3}> {/* Changed from HStack to VStack */}


                <Icon as={FaCoins} color="gray.400" boxSize={8} />


                <Text fontSize="lg" fontWeight="bold">Silver</Text>

              </VStack>


              <Button colorScheme="gray" mt={2}>Buy</Button>


            </Box>

            <Box p={4} borderWidth={1} borderRadius="lg" w="100%" bg="yellow.200">

              <VStack spacing={3}> {/* Changed from HStack to VStack */}


                <Icon as={FaCoins} color="yellow.400" boxSize={10} />

                <Text fontSize="lg" fontWeight="bold">Gold</Text>

              </VStack>


              <Button colorScheme="yellow" mt={2}>Buy</Button>

            </Box>

          </HStack> {/* Changed from VStack to HStack */}


        </ModalBody>


        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>


            Close

          </Button>

        </ModalFooter>

      </ModalContent>

    </Modal>

  );
};


export default CoinModal;