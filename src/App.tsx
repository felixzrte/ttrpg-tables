import { Button, Container, Box, Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import logo from '../public/tlogo.svg';

function App() {
  return (
    <>
      <Image src={logo} w={100} h={100}/>
      <Container>
        <Box textAlign={{ base: 'center', md: 'start' }}>
          <Heading pb={4}>
            Providing an easy way to find the tables you need for your next game
          </Heading>
          <Button variant="outline" borderColor="gray.500">
            Get Started &rarr;
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
