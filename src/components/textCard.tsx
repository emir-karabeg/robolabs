import { Box, Text } from '@chakra-ui/react';

interface cardProps {
    text: string;
}

export const TextCard = (props: cardProps) => {
  return (
    <Box rounded='md'
        boxShadow='7px 7px var(--chakra-colors-orange)'
        backgroundColor='blue' color='white'
        marginBottom='8%'>

        <Text fontFamily='text' padding='4%'>
            {props.text}
        </Text>
    </Box>
  );
};