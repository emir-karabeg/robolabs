import { Flex, Image, Heading, Text, Spacer } from '@chakra-ui/react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <Flex h="14vh" bg="black" align="center" px="5%">
      <Flex justify="space-around" w="40%">
        <Link href="https://google.com">
          <Image src="/instagram.svg" />
        </Link>
        <Link href="https://google.com">
          <Image src="/email.svg" />
        </Link>
        <Link href="https://google.com">
          <Image src="/linked-in.svg" />
        </Link>
      </Flex>
      <Spacer />
      <Heading color="white" size="sm">
        ROBOLABS
      </Heading>
    </Flex>
  );
};
