import { Image, Container, HStack, VStack, Text, Heading, Center, Button } from '@chakra-ui/react';
import { Footer } from '../src/components/footer';
import { NavBar } from '../src/components/nav-bar';
import { LandingCarousel } from '../src/components/landing-carousel';
import { RegisterButton } from '../src/components/register-button';

export default function Landing() {
  return (
    <>
        <NavBar />
        <Container maxWidth="100vw" bgImage="url('landing-background-rectangle-1.svg')"  backgroundRepeat="no-repeat" width="100vw" margin-right="0" padding="0" bgSize="contain" >
            <Container pt="3rem">
                <LandingCarousel />
            </Container>
            <Container mt="2rem" >
                <HStack display="flex" justifyContent="space-around">
                    <VStack width="8rem">
                        <Image src="buildlogo.svg"></Image>
                        <Heading pt="2rem">BUILD</Heading>
                    </VStack>
                    <VStack width="8rem">
                        <Image src="code-logo.svg"></Image>
                        <Heading pt="2rem">CODE</Heading>
                    </VStack>
                    <VStack width="8rem">
                        <Image src="compete-logo.svg"></Image>
                        <Heading pt="2rem">COMPETE</Heading>
                    </VStack>
                </HStack>
                <Center mt="3rem" textAlign="center">
                    Description about mission, story, values. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Center>
            </Container>
        </Container>
        <Center mt="3rem">
            <RegisterButton></RegisterButton>
        </Center>
        <Footer />
    </>
  );
}