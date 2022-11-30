import { Box, Text, Heading } from '@chakra-ui/react';
import { AboutUsPage } from '../src/components/about-us';
import { Footer } from '../src/components/footer';
import { NavBar } from '../src/components/nav-bar';

export default function Home() {
  return (
    <>
      <NavBar />
      <Box></Box>
      <AboutUsPage />
      <Footer />
    </>
  );
}
