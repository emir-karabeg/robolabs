import { Box, Text, Heading, Image } from '@chakra-ui/react';
import { Footer } from '../src/components/footer';
import { NavBar } from '../src/components/nav-bar';

export default function Landing() {
  return (
    <>
      <NavBar />
      <Box>Landing</Box>
      <Image src="https://robolabsusa.com/upload/medialibrary/228/2281ced5c87c615048fb7b737c3a7812.jpg"></Image>

      <Footer />
    </>
  );
}