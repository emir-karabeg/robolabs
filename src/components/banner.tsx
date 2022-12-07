import { Box, Container, Center, Text } from '@chakra-ui/react';

interface bannerProps {
  text: string;
  textColor: string;
  backgroundColor: string;
}

export const Banner = (props: bannerProps) => {
  return (
    <Box
      bg={props.backgroundColor}
      w="100%"
      color={props.textColor}
      paddingTop="8%"
      paddingBottom="8%"
    >
      <Center>
        <Text fontFamily="heading" fontWeight="semibold">
          {props.text}
        </Text>
      </Center>
    </Box>
  );
};
