import { Box, Text, Heading } from '@chakra-ui/react';
import { Footer } from '../src/components/footer';
import { NavBar } from '../src/components/nav-bar';
import Landing from './landing';

export default function Home() {
  return (
    <>
      <NavBar />
      <Box>
        <Landing></Landing>
      </Box>
      <Footer />
    </>
  );
}
