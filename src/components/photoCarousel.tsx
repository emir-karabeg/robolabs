import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Card } from '@chakra-ui/react';

interface carouselProps {
    images: string[];
}

export const PhotoCarousel = (props: carouselProps) => {
    var elements: React.ReactElement[] = []
    props.images.forEach((image) => {
        elements.push(
        <div>
            <img src={image} />
        </div>)
    });

  return (
    <Card marginBottom="8%">
        <Carousel showStatus={false} showThumbs={false} autoPlay={true} interval={10000}>
            {elements}
        </Carousel>
    </Card>

  );
};