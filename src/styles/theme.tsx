import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#B5222D',
    },
    white: '#ffffff',
    orange: '#FFA700',
    darkRed: '#570d13',
    blue: '#225DB5',
    gray: '#383838',
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
        register: {
          bg: '#FFA700',
          color: 'white',
        },
      },
    },
  },
});

export default theme;
