import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Image, Card } from '@chakra-ui/react';

interface carouselProps {
  images: string[];
}

export const PhotoCarousel = (props: carouselProps) => {
  var elements: React.ReactElement[] = [];
  props.images.forEach((image) => {
    elements.push(
      <div>
        <Image
          src={image}
          borderRadius="2xl"
          border="thin solid"
          borderColor="blue"
        ></Image>
      </div>
    );
  });

  return (
    <Card
      marginBottom="8%"
      borderRadius="2xl"
      border="thin solid"
      borderColor="blue"
    >
      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={10000}
      >
        {elements}
      </Carousel>
    </Card>
  );
};
