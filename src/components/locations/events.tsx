import { Flex, Image, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, VStack, HStack, AccordionIcon, Box, Mark } from '@chakra-ui/react';
import {EventInfo} from "./eventInfo"

export const Event = () => {

  return (
    <>
        <Flex flexDirection={"column"} justify={"center"}>
            <Box ml={"8vw"} w={"82vw"} mb={"2vh"}>
                <Box mt={"3vh"} textAlign={"left"}>
                    <Text fontSize={"1.9vh"}>Address: 277 Bedford Ave, Brooklyn, NY</Text>
                    <Text fontSize={"1.9vh"}>Hours: 2:00pm - 7:00pm</Text>
                    <Text fontSize={"1.9vh"}>Phone: (420)123-4567</Text>
                </Box>
                <Text mt={"2vh"}>lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque odio nisl, luctus a tempus a, euismod ac ex. Suspendisse condimentum lectus quam.</Text>
            </Box>
            <Text mb={"2.5vh"} fontSize={"2vh"} textAlign={"center"} mt={"2vh"} color={"#383838"} >DUBLIN EVENT CALENDAR</Text>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box mt={"1vh"} mb={"1vh"} flex='1' textAlign='center' flexDir={"row"}>
                                <HStack ml={"4vw"} spacing={"10vw"}>
                                    <VStack spacing='0px' textAlign={"center"}>
                                        <Text as='b' fontSize={"3vh"}>5</Text>
                                        <Text as='b' fontSize={"1.75vh"}>NOV</Text>
                                    </VStack>
                                    <VStack spacing='0px'>
                                        <Box textAlign={"left"}>
                                            <Text as='b' fontSize={"2vh"}>DUBLIN BATTLE</Text>
                                            <Text fontSize={"1.5vh"}>Sat, 8-11pm</Text>
                                            <Text fontSize={"1.5vh"}>240 Dublin Way, Dublin, CA</Text>
                                        </Box>
                                    </VStack>
                                </HStack>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel p={"0px"}>
                        <EventInfo />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box mt={"1vh"} mb={"1vh"} flex='1' textAlign='center' flexDir={"row"}>
                                <HStack ml={"4vw"} spacing={"10vw"}>
                                    <VStack spacing='0px' textAlign={"center"}>
                                        <Text as='b' fontSize={"3vh"}>20</Text>
                                        <Text as='b' fontSize={"1.75vh"}>DEC</Text>
                                    </VStack>
                                    <VStack spacing='0px'>
                                        <Box textAlign={"left"}>
                                            <Text as='b' fontSize={"2vh"}>FIRST LIVESTREAM</Text>
                                            <Text fontSize={"1.5vh"}>Sat, 8-11pm</Text>
                                            <Text fontSize={"1.5vh"}>240 Dublin Way, Dublin, CA</Text>
                                        </Box>
                                    </VStack>
                                </HStack>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel p={"0px"}>
                    <EventInfo />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box mt={"1vh"} mb={"1vh"} flex='1' textAlign='center' flexDir={"row"}>
                            <HStack ml={"4vw"} spacing={"10vw"}>
                                    <VStack spacing='0px' textAlign={"center"}>
                                        <Text as='b' fontSize={"3vh"}>5</Text>
                                        <Text as='b' fontSize={"1.75vh"}>NOV</Text>
                                    </VStack>
                                    <VStack spacing='0px'>
                                        <Box textAlign={"left"}>
                                            <Text as='b' fontSize={"2vh"}>DUBLIN BATTLE</Text>
                                            <Text fontSize={"1.5vh"}>Sat, 8-11pm</Text>
                                            <Text fontSize={"1.5vh"}>240 Dublin Way, Dublin, CA</Text>
                                        </Box>
                                    </VStack>
                                </HStack>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel p={"0px"}>
                        <EventInfo />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    </>
  );
};