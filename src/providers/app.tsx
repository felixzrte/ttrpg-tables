import * as React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import theme from '@/theme';

type AppProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
        <ChakraProvider theme={theme}>
          <MainLayout>
            <Router>{children}</Router>
          </MainLayout>
        </ChakraProvider>
      </QueryClientProvider>
    </React.Suspense>
  );
};
