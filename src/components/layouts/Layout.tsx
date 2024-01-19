import { Flex } from '@chakra-ui/react';

interface LayoutProps {
  children?: React.ReactNode
}

export default function MainLayout(props: LayoutProps) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: '1200px' }}
      m="0 auto"
    >
      {props.children}
    </Flex>
  );
}
