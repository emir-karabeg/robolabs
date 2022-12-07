import { Flex, Image, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Mark, useStatStyles } from '@chakra-ui/react';
import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { Event } from "./events";


export const Location = () => {
//process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
  const { isLoaded } = useLoadScript({
    googleMapsApiKey : process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, 
});

  const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius:"10px",
    borderWidth: "thin",
    zIndex: 1,
    borderColor: "black",
  };

  const center = useMemo(() => ({lat: 40.7831, lng: -73.9712}), []);

  const mapOrNo = () => {
    if (!isLoaded) return <div>Loading...</div>
    return (<GoogleMap zoom={10} center={center} mapContainerStyle={containerStyle} >
        <MarkerF position={center} />
    </GoogleMap>)
  }

  return (
    <>
        <Flex flexDirection={"column"} justify={"flex-start"} margin="auto">
            <Box h={"13vh"} bg={"#B5222D"}>
                <Text fontSize={"2.2vh"} pt={"5vh"} color={"white"} textAlign={"center"}>LOCATIONS</Text>
            </Box>
            <Flex flexDirection={"column"} justify={"flex-start"} alignItems={"center"}>
                <Box mt={"4vh"} w={"81.5vw"} h={"calc(28.7vh)"} maxH={"24vh"}>
                    {mapOrNo()}
                    <Box position="relative" borderRadius={"10px"} bg="#B5222D" h={"24vh"} zIndex={0} right={"-1.75vw"} mt={"-23vh"}></Box>
                </Box>
                <Text fontSize={"1.9vh"} mb={"5vh"} mt={"5vh"} w={"81.5vw"}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque odio nisl, luctus a tempus a, euismod ac ex. Suspendisse condimentum lectus quam.</Text>
            </Flex>
            <Accordion allowToggle allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton h={"13vh"} bg="#002255" color="white" _hover={{bg:"#002255", color:"white"}} _expanded={{bg:"#002255", color:"white"}}>
                            <Box flex='1' textAlign='center'>
                                <Text>DUBLIN</Text>
                            </Box>
                            <AccordionIcon  />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel padding={"0px"}>
                        <Event />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton h={"13vh"} bg="#002255" color="white" _hover={{bg:"#002255", color:"white"}} _expanded={{bg:"#002255", color:"white"}}>
                            <Box flex='1' textAlign='center'>
                                <Text>FREMONT</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel padding={"0px"}>
                        <Event />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    </>
  );
};