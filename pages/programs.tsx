import { Accordion } from '@chakra-ui/react';
import { Banner } from '../src/components/banner';
import { DropDown } from '../src/components/dropdown';

export const Programs = () => {
  return (
    <>
        <Banner
          text='VEX ROBOTICS CLASSES'
          backgroundColor='blue'
          textColor='white'
        />

        <Accordion defaultIndex={[0]} allowMultiple>
        <DropDown 
          title='VEX IQ CLASS'
          images={['https://picsum.photos/500/300?random=1', 'https://picsum.photos/500/300?random=2', 'https://picsum.photos/500/300?random=3']}
          quotes='This is on the quotes. The carousel, card text, and quotes are all optional. If the value for the respective field is non null, then the corresponding element should show up'
          accomplishments={['Accomplishment 1', 'Accomplishment 2']}
        />
        <DropDown 
          title='VEX EDC CLASS'
          card='This should be on card'
          images={['https://picsum.photos/500/300?random=4', 'https://picsum.photos/500/300?random=5', 'https://picsum.photos/500/300?random=6']}
        />
        </Accordion>

        <Banner
          text='INNOVATION ACADEMY'
          backgroundColor='blue'
          textColor='white'
        />

        <Accordion defaultIndex={[0]} allowMultiple>
        <DropDown 
          title='PATENT INVENTOR PROGRAM'
        />
        <DropDown 
          title='PAPER PUBLICATION PROGRAM'
          card='There is the card'
          quotes='There is the quotes'
        />
        </Accordion>
        
        <Banner
          text='ROBOTICS CAMPS'
          backgroundColor='blue'
          textColor='white'
        />

        <Accordion defaultIndex={[0]} allowMultiple>
        <DropDown 
          title='SUMMER CAMP'
          card='af lasjdf lkasd laksd falsk dalksdf jalsdk fjalskdf jlaksdf jalsdf jalskd alsd alskdf ajls dfalak'
        />
        <DropDown 
          title='THANKSGIVING CAMP'
          quotes='asdlfkjalskd jalkd jalskdf jalskdfj alskdfj alksfdj alksdfj alskdfj alksdfj laksdfj laksdf asldkf alsdkf'
        />
        <DropDown 
          title='WINTER CAMP'
          images={['https://picsum.photos/500/300?random=7', 'https://picsum.photos/500/300?random=8', 'https://picsum.photos/500/300?random=9']}
          card='Winter camp has everything af lasjdf lkasd laksd falsk dalksdf jalsdk fjalskdf jlaksdf jalsdf jalskd alsd alskdf ajls dfalak'
          quotes='asdlfkjalskd jalkd jalskdf jalskdfj alskdfj alksfdj alksdfj alskdfj alksdfj laksdfj laksdf asldkf alsdkf'
        />
        </Accordion>
    </>
  );
}