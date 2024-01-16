// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    fontFamily: 'Bookerly',
  },
})

const Button = defineStyleConfig({
  baseStyle: {
    fontFamily: 'Gontserrat',
    fontWeight: 'light'
  },
})

const theme = extendTheme({
  components: { Heading, Button },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.100',
        color: 'gray.800',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});

export default theme;
