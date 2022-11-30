import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#B5222D',
    },
  },
  semanticTokens: {
    fonts: {
      heading: `'ABeeZee', sans-serif`,
      text: `'ABeeZee', sans-serif`,
    },
  },
  components: {
    Button: {
      variants: {
        create: {
          bg: '#2F80ED',
          color: 'white',
          _hover: {
            bg: '#0F6DEB',
          },
        },
        blue: {
          bg:'#225DB5', 
          color: 'white', 
          pl: '2rem', 
          pr: '2rem', 
          font: 'Azonix, sans-serif',
          _hover: {
            bg: '#0F6DEB',
          },
        }
      },
    },
  },
});

export default theme;
