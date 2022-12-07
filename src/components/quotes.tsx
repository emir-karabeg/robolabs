import { Box, Text, Image, Flex, Spacer } from '@chakra-ui/react';

interface quotesProps {
  text: string;
}

export const Quotes = (props: quotesProps) => {
  return (
    <Box marginBottom="8%">
      <Image src="openQuotes.svg"></Image>
      <Text
        fontFamily="text"
        paddingLeft="11%"
        paddingRight="11%"
        align="center"
      >
        {props.text}
      </Text>
      <Flex>
        <Spacer />
        <Image src="closingQuotes.svg" align="float: right"></Image>
      </Flex>
    </Box>
  );
};
