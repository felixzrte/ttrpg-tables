import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/layouts/Layout.tsx';
import ErrorPage from './components/sections/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/tables',
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </ChakraProvider>
  </React.StrictMode>
);
