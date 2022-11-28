import { Image, Container, HStack, VStack, Text, Heading, Center, Button } from '@chakra-ui/react';
import { Footer } from '../src/components/footer';
import { NavBar } from '../src/components/nav-bar';
import { LandingCarousel } from '../src/components/landing-carousel';
import { RegisterButton } from '../src/components/register-button';

export default function Landing() {
  return (
    <>
    <Image position="absolute" width="100vw" src="landing-background-rectangle-1.svg"></Image>
        <Center width="100vw" m="0" p="0">
            
            <Container pt="4rem" maxWidth="80%">
                <LandingCarousel />
            </Container>
        </Center>  
            <Container mt="2rem" >
                <HStack display="flex" flex="1 1 0px" justifyContent="space-around">
                    <VStack width="8rem">
                        <Image src="buildlogo.svg"></Image>
                        <Heading pt="2rem" fontSize={["150%", "180%", "230%"]} textAlign="center">BUILD</Heading>
                    </VStack>
                    <VStack width="8rem">
                        <Image src="code-logo.svg"></Image>
                        <Heading pt="2rem" pr="2" fontSize={["150%", "180%", "230%"]} textAlign="center">CODE</Heading>
                    </VStack>
                    <VStack width="8rem">
                        <Image src="compete-logo.svg"></Image>
                        <Heading pt="2rem" fontSize={["150%", "180%", "230%"]} textAlign="center">COMPETE</Heading>
                    </VStack>
                </HStack>
                <Center mt="3rem" textAlign="center">
                    Description about mission, story, values. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Center>
            </Container>
       
        <Center mt="3rem">
            <RegisterButton></RegisterButton>
        </Center>
        <Footer />
    </>
  );
}