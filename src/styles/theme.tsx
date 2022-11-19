import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
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
      },
    },
  },
  colors: {
    white: '#ffffff',
    red: '#b5222d',
    darkRed: '#570d13',
    blue: '#002255',
    gray: '#383838',
  },
});

export default theme;
