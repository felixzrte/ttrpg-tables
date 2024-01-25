// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

// Components
const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    fontFamily: 'Bookerly',
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    fontFamily: 'Gontserrat',
    fontWeight: 'light',
  },
});

// Global Theme
const theme = extendTheme({
  textStyles: {
    p: {
      fontFamily: 'Gontserrat',
    },
  },
  colors: {
    body: '#FFFAF0',
    text: '#3B3C37',
    accent: ' #545450',
  },
  components: { Heading, Button },
  styles: {
    global: {
      body: {
        bg: 'body',
        color: 'text',
      },
    },
  },
});

export default theme;
