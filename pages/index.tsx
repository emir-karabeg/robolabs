import { Box, Text, Heading } from '@chakra-ui/react';
import { Footer } from '../src/components/footer';
import { NavBar } from '../src/components/nav-bar';
import { Location } from '../src/components/locations/location';

export default function Home() {
  return (
    <>
      <NavBar />
      <Box>
        <Location/>
      </Box>
      <Footer />
    </>
  );
}
