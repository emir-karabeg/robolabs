import { Text, Center, Button, Box } from "@chakra-ui/react";
import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { TextCard } from './textCard';
import { Quotes } from './quotes';
import { PhotoCarousel } from "./photoCarousel";
import { Accomplishments } from "./accomplishments";

interface dropProps {
    title: string;
    images?: string[];
    card?: string;
    quotes?: string;
    accomplishments?: string[];
}

const renderCarousel = (images: any) => {
    if (typeof images !== 'undefined') {
        return <PhotoCarousel images={images} />
    }
}

const renderCard = (text: any) => {
    if (typeof text !== 'undefined') {
        return <TextCard text={text} />
    }
}

const renderQuotes = (text: any) => {
    if (typeof text !== 'undefined') {
        return <Quotes text={text} />
    }
}

const renderAccomplishments = (text: any) => {
    if (typeof text !== 'undefined') {
        return <Accomplishments text={text} />
    }
}

export const DropDown = (props: dropProps) => {
    return (
        <AccordionItem>
            <h2>
            <AccordionButton paddingTop='6%' paddingBottom='6%'>
                <Box flex='1' textAlign='left'>
                    {props.title}
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel>
                {renderCarousel(props.images)}

                {renderCard(props.card)}

                {renderQuotes(props.quotes)}

                {renderAccomplishments(props.accomplishments)}

                <Center>
                    <Button variant='register'>
                        <Text fontFamily='text'>Register</Text>
                    </Button>
                </Center>
            </AccordionPanel>
        </AccordionItem>
    );
  };