import { Container, Heading, Text } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Container centerContent>
      <Heading>Oops!</Heading>
      <Text textStyle="p" fontWeight="light" py={4}>
        Sorry, an unexpected error has occurred.
      </Text>
      <Text textStyle="p">{error.statusText || error.message}</Text>
    </Container>
  );
}
