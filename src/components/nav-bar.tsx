import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Flex,
  Image,
  Heading,
  Text,
  Spacer,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import { SideBar } from './side-bar';

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex h="8.5vh" bg="brand.100" px="5%" align="center">
        <Image src="/logo.svg" alt="Robolabs logo" w="50%" pt="1.5%" />
        <Spacer />
        <Box as="button" w="7.25%" onClick={onOpen}>
          <HamburgerIcon w="full" h="full" color="white" />
        </Box>
      </Flex>
      <SideBar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};
