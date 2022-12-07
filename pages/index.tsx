import {
  Image,
  Container,
  HStack,
  VStack,
  Text,
  Heading,
  Center,
  Button,
} from '@chakra-ui/react';
import { Footer } from '../src/components/footer';
import { NavBar } from '../src/components/nav-bar';
import { LandingCarousel } from '../src/components/landing-carousel';
import { RegisterButton } from '../src/components/register-button';

export default function Landing() {
  return (
    <>
      <NavBar />
      <Image
        position="absolute"
        width="100vw"
        src="landing-background-rectangle-1.svg"
      ></Image>
      <Center width="100vw" m="0" p="0">
        <Container pt="4rem" maxWidth="80%">
          <LandingCarousel />
        </Container>
      </Center>
      <Container mt="2rem">
        <HStack display="flex" flex="1 1 0px" justifyContent="space-around">
          <VStack width="8rem">
            <Image src="buildlogo.svg"></Image>
            <Heading
              pt="2rem"
              fontSize={['150%', '180%', '230%']}
              textAlign="center"
            >
              BUILD
            </Heading>
          </VStack>
          <VStack width="8rem">
            <Image src="code-logo.svg"></Image>
            <Heading
              pt="2rem"
              pr="2"
              fontSize={['150%', '180%', '230%']}
              textAlign="center"
            >
              CODE
            </Heading>
          </VStack>
          <VStack width="8rem">
            <Image src="compete-logo.svg"></Image>
            <Heading
              pt="2rem"
              fontSize={['150%', '180%', '230%']}
              textAlign="center"
            >
              COMPETE
            </Heading>
          </VStack>
        </HStack>
        <Center mt="3rem" textAlign="center">
          Description about mission, story, values. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Center>
      </Container>

      <Container
        backgroundImage="bg-blue.svg"
        backgroundRepeat="no-repeat"
        backgroundSize="161%"
      >
        <Text color="white" mt="1rem">
          .
        </Text>
        <Center>
          <RegisterButton></RegisterButton>
        </Center>

        <Container mt="1rem">
          <Container>
            <Text
              align="center"
              color="white"
              fontSize={['230%', '250%', '300%']}
            >
              50,000
            </Text>
            <Text
              align="center"
              color="white"
              fontSize={['120%', '150%', '200%']}
            >
              Students enrolled in our classes
            </Text>
          </Container>

          <Container mt="1rem">
            <Text
              align="center"
              color="white"
              fontSize={['230%', '250%', '300%']}
            >
              5,000
            </Text>
            <Text
              align="center"
              color="white"
              fontSize={['120%', '150%', '200%']}
            >
              Attended our summer programs
            </Text>
          </Container>

          <Container mt="1rem">
            <Text
              align="center"
              color="white"
              fontSize={['230%', '250%', '300%']}
            >
              25,000
            </Text>
            <Text
              align="center"
              color="white"
              fontSize={['120%', '150%', '200%']}
            >
              Participated in our other thing
            </Text>
            <Text>.</Text>
          </Container>
        </Container>
      </Container>

      <Text
        padding="1rem"
        bg="#B5222D"
        color="white"
        align="center"
        fontSize={['230%', '250%', '300%']}
      >
        TESTIMONIES
      </Text>

      <HStack mt="2rem" align="center">
        <Image src="beg-quote.svg" boxSize="17%"></Image>
        <Text align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          odio nisl, luctus a tempus a, euismod ac e.
        </Text>
        <Image src="end-quote.svg" boxSize="17%"></Image>
      </HStack>

      <HStack mt="2rem" align="center">
        <Image src="beg-quote.svg" boxSize="17%"></Image>
        <Text align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          odio nisl, luctus a tempus a, euismod ac e.
        </Text>
        <Image src="end-quote.svg" boxSize="17%"></Image>
      </HStack>

      <HStack my="2rem" align="center">
        <Image src="beg-quote.svg" boxSize="17%"></Image>
        <Text align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          odio nisl, luctus a tempus a, euismod ac e.
        </Text>
        <Image src="end-quote.svg" boxSize="17%"></Image>
      </HStack>
      <Footer />
    </>
  );
}
