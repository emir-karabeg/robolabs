import { Flex, Image, Text, Button, Box, HStack, VStack } from '@chakra-ui/react';

export const EventInfo = () => {

  return (
    <>
        <HStack justify={"center"}>
            <VStack mb={"3vh"} mt={"2vh"} spacing={"3vh"} w={"80vw"}>
                <Box>
                    <HStack justify={"center"} spacing={"9vw"}>
                        <svg width="145" height="136" viewBox="0 0 145 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="145" height="136" rx="10" fill="#868686"/>
                        </svg>
                        <svg width="145" height="136" viewBox="0 0 145 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="145" height="136" rx="10" fill="#868686"/>
                        </svg>
                    </HStack>
                </Box>
                <Text fontSize={"2vh"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio nisl, luctus a tempus a, euismod ac ex. Suspendisse condimentum lectus quam, at veneanatis augue vulputate quis.</Text>
                <Button w={"50vw"} h={"7vh"} bg={"#225DB5"} color={"white"} textAlign={"center"} fontSize={"2vh"}>View Details</Button>
            </VStack>
        </HStack>
    </>
  );
};