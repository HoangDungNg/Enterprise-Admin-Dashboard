import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';
import { AppLayout, Home } from '@ui/layout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
