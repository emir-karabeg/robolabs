import {
  Flex,
  Image,
  Heading,
  Text,
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Footer } from '../src/components/footer';
import { NavBar } from '../src/components/nav-bar';
import theme from '../src/styles/theme';

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <Flex direction={'column'} justifyItems={'center'}>
        <Box
          bg={'#B5222D'}
          height={'13vh'}
          alignItems={'center'}
          display={'flex'}
          justifyContent={'center'}
        >
          <Text
            color="white"
            fontWeight="semibold"
            fontFamily={theme.semanticTokens.fonts.text}
          >
            ABOUT US
          </Text>
        </Box>
        <Box
          bg={'#002255'}
          height={'13vh'}
          alignItems={'center'}
          display={'flex'}
          justifyContent={'center'}
        >
          <Text fontFamily={theme.semanticTokens.fonts.text} color="white">
            INCLUSIVE STEM
          </Text>
        </Box>

        <Image
          marginY={'3vh'}
          marginX={'10vh'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'30vh'}
          src={'/inclusive_stem.png'}
          borderRadius="2xl"
          border="thin solid"
        ></Image>

        <Text
          fontFamily={theme.semanticTokens.fonts.text}
          textAlign={'center'}
          fontSize={'1.9vh'}
          mb={'5vh'}
          marginX={'10vh'}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Box
          bg={'#002255'}
          height={'13vh'}
          alignItems={'center'}
          display={'flex'}
          justifyContent={'center'}
        >
          <Text fontFamily={theme.semanticTokens.fonts.text} color="white">
            PARTNERS AND SPONSORS
          </Text>
        </Box>
        <Grid
          h={'60vh'}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          marginY={'5vh'}
        >
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              borderRadius={'full'}
              bg="#FFA700"
              height={'20vh'}
              width={'20vh'}
              border="thin solid"
            >
              <Image
                height={'20vh'}
                src={'/sponsor_logo.png'}
                borderRadius={'full'}
                border="thin solid"
                left={'-1.5vw'}
                top={'-1.25vw'}
                position={'relative'}
              ></Image>
            </Box>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              borderRadius={'full'}
              bg="#FFA700"
              height={'20vh'}
              width={'20vh'}
              border="thin solid"
            >
              <Image
                height={'20vh'}
                src={'/sponsor_logo.png'}
                borderRadius={'full'}
                border="thin solid"
                left={'-1.5vw'}
                top={'-1.25vw'}
                position={'relative'}
              ></Image>
            </Box>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              borderRadius={'full'}
              bg="#FFA700"
              height={'20vh'}
              width={'20vh'}
              border="thin solid"
            >
              <Image
                height={'20vh'}
                src={'/sponsor_logo.png'}
                borderRadius={'full'}
                border="thin solid"
                left={'-1.5vw'}
                top={'-1.25vw'}
                position={'relative'}
              ></Image>
            </Box>
          </GridItem>
          <GridItem
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              borderRadius={'full'}
              bg="#FFA700"
              height={'20vh'}
              width={'20vh'}
              border="thin solid"
            >
              <Image
                height={'20vh'}
                src={'/sponsor_logo.png'}
                borderRadius={'full'}
                border="thin solid"
                left={'-1.5vw'}
                top={'-1.25vw'}
                position={'relative'}
              ></Image>
            </Box>
          </GridItem>
        </Grid>
        <Box
          bg={'#002255'}
          height={'13vh'}
          alignItems={'center'}
          display={'flex'}
          justifyContent={'center'}
        >
          <Text fontFamily={theme.semanticTokens.fonts.text} color="white">
            TEAM MEMBERS
          </Text>
        </Box>
        <Grid
          h={'60vh'}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          marginY={'5vh'}
        >
          <GridItem
            flexDirection={'column'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              borderRadius={'full'}
              bg="#FFA700"
              height={'20vh'}
              width={'20vh'}
            >
              <Image
                height={'20vh'}
                src={'/inclusive_stem.png'}
                borderRadius={'full'}
                left={'-2.5vw'}
                position={'relative'}
              ></Image>
            </Box>
            <Text fontWeight={'semibold'} mt={'5px'}>
              BOB ROSS
            </Text>
            <Text fontSize={'sm'}>Developer</Text>
          </GridItem>
          <GridItem
            flexDirection={'column'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              borderRadius={'full'}
              bg="#FFA700"
              height={'20vh'}
              width={'20vh'}
            >
              <Image
                height={'20vh'}
                src={'/inclusive_stem.png'}
                borderRadius={'full'}
                left={'-2.5vw'}
                position={'relative'}
              ></Image>
            </Box>
            <Text fontWeight={'semibold'} mt={'5px'}>
              BOB ROSS
            </Text>
            <Text fontSize={'sm'}>Developer</Text>
          </GridItem>
          <GridItem
            flexDirection={'column'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              borderRadius={'full'}
              bg="#FFA700"
              height={'20vh'}
              width={'20vh'}
            >
              <Image
                height={'20vh'}
                src={'/inclusive_stem.png'}
                borderRadius={'full'}
                left={'-2.5vw'}
                position={'relative'}
              ></Image>
            </Box>
            <Text fontWeight={'semibold'} mt={'5px'}>
              BOB ROSS
            </Text>
            <Text fontSize={'sm'}>Developer</Text>
          </GridItem>
          <GridItem
            flexDirection={'column'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              borderRadius={'full'}
              bg="#FFA700"
              height={'20vh'}
              width={'20vh'}
            >
              <Image
                height={'20vh'}
                src={'/inclusive_stem.png'}
                borderRadius={'full'}
                left={'-2.5vw'}
                position={'relative'}
              ></Image>
            </Box>
            <Text fontWeight={'semibold'} mt={'5px'}>
              BOB ROSS
            </Text>
            <Text fontSize={'sm'}>Developer</Text>
          </GridItem>
        </Grid>
      </Flex>
      <Footer />
    </>
  );
}
