import { Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const LandingCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      showStatus={false}
    >
      <div>
        <Image src="carousel.svg"></Image>
      </div>
      <div>
        <Image src="https://robolabsusa.com/upload/medialibrary/228/2281ced5c87c615048fb7b737c3a7812.jpg"></Image>
      </div>
    </Carousel>
  );
};
