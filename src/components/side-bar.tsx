import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Text,
  VStack,
  Heading,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

export const SideBar = (props: any) => {
  return (
    <Drawer onClose={props.onClose} isOpen={props.isOpen}>
      <DrawerOverlay mt="8.5vh" />
      <DrawerContent mt="8.5vh" maxWidth="42%">
        <DrawerBody p={0}>
          <Link href="/">
            <Box
              bg="#225DB5"
              w="100%"
              color="white"
              align="center"
              py="15%"
              as="button"
            >
              <Heading size="sm" fontWeight="semibold">
                HOME
              </Heading>
            </Box>
          </Link>
          <Box border="1px" color="gray.500"></Box>
          <Link href="/">
            <Box w="100%" align="center" py="15%" as="button">
              <Heading size="sm" fontWeight="semibold">
                ABOUT US
              </Heading>
            </Box>
          </Link>
          <Box border="1px" color="gray.500"></Box>
          <Link href="/">
            <Box w="100%" align="center" py="15%" as="button">
              <Heading size="sm" fontWeight="semibold">
                MEMBERSHIP
              </Heading>
            </Box>
          </Link>
          <Link href="/">
            <Box border="1px" color="gray.500"></Box>
            <Box w="100%" align="center" py="10%" as="button">
              <Heading size="sm" fontWeight="semibold" w="80%" ml="10%">
                LOCATIONS & EVENTS
              </Heading>
            </Box>
          </Link>
          <Box border="1px" color="gray.500"></Box>
          <Link href="/">
            <Box w="100%" align="center" py="15%" as="button">
              <Heading size="sm" fontWeight="semibold">
                REGISTER
              </Heading>
            </Box>
          </Link>
          <Box border="1px" color="gray.500"></Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
