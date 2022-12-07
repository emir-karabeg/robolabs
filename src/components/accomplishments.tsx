import {
  Box,
  Center,
  Text,
  Image,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

interface accomplishmentsProps {
  text: string[];
}

export const Accomplishments = (props: accomplishmentsProps) => {
  var elements: React.ReactElement[] = [];
  props.text.forEach((str) => {
    elements.push(
      <ListItem>
        <Text fontFamily="text">{str}</Text>
      </ListItem>
    );
  });

  return (
    <Box marginBottom="8%">
      <Center marginBottom="2%">
        <Image src="accomplishments.svg"></Image>
      </Center>
      <Center marginBottom="2%">
        <Text fontFamily="heading" color="blue">
          Accomplishments
        </Text>
      </Center>
      <Center>
        <UnorderedList>{elements}</UnorderedList>
      </Center>
    </Box>
  );
};
