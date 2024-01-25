import { Container, Heading, Text } from '@chakra-ui/react';

export const NotFound = () => {
  return (
    <Container centerContent>
      <Heading>Oops!</Heading>
      <Text textStyle="p" fontWeight="light" py={4}>
        Sorry, this page does not exist.
      </Text>
    </Container>
  );
};
