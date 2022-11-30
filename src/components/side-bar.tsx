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
import { useEffect, useState } from 'react';

export const SideBar = (props: any) => {
  const [currentPage, setCurrentPage] = useState('');

  const regex = new RegExp('[^/]*$');

  useEffect(() => {
    const currentPath = regex.exec(window.location.href);
    if (currentPath) {
      setCurrentPage(currentPath[0]);
    }
  }, []);

  const bgSelector = (page: string) => {
    if (currentPage == page) {
      return '#FFA700';
    } else {
      return 'white';
    }
  };

  const colorSelector = (page: string) => {
    if (currentPage == page) {
      return 'white';
    } else {
      return '#225DB5';
    }
  };

  return (
    <Drawer onClose={props.onClose} isOpen={props.isOpen}>
      <DrawerOverlay mt="8.5vh" />
      <DrawerContent mt="8.5vh" maxWidth="42%">
        <DrawerBody p={0}>
          <Link href="/">
            <Box
              bg={bgSelector('')}
              w="100%"
              align="center"
              py="15%"
              as="button"
            >
              <Heading
                size="sm"
                fontWeight="semibold"
                color={colorSelector('')}
              >
                HOME
              </Heading>
            </Box>
          </Link>
          <Box border="1px" color="gray.500"></Box>
          <Link href="/">
            <Box w="100%" align="center" py="15%" as="button">
              <Heading
                size="sm"
                fontWeight="semibold"
                color={colorSelector('about-us')}
              >
                ABOUT US
              </Heading>
            </Box>
          </Link>
          <Box border="1px" color="gray.500"></Box>
          <Link href="/">
            <Box w="100%" align="center" py="15%" as="button">
              <Heading
                size="sm"
                fontWeight="semibold"
                color={colorSelector('membership')}
              >
                MEMBERSHIP
              </Heading>
            </Box>
          </Link>
          <Link href="/">
            <Box border="1px" color="gray.500"></Box>
            <Box w="100%" align="center" py="10%" as="button">
              <Heading
                size="sm"
                fontWeight="semibold"
                w="80%"
                ml="10%"
                color={colorSelector('about-us')}
              >
                LOCATIONS & EVENTS
              </Heading>
            </Box>
          </Link>
          <Box border="1px" color="gray.500"></Box>
          <Link href="/">
            <Box w="100%" align="center" py="15%" as="button">
              <Heading
                size="sm"
                fontWeight="semibold"
                color={colorSelector('about-us')}
              >
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
