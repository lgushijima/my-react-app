import {createBrowserRouter, Navigate} from 'react-router-dom';

import {ProtectedRoute} from './protected-route';
import {MainLayout} from '../components/layout/main-layout';
import {AppRoot} from './app-root';
import {NotFoundPage, ErrorPage} from '../components/errors';

import {LoginPage} from '@/domains/auth/pages';
import {DashboardPage, DashboardTabHome, DashboardTabTest} from '@/domains/dashboard/index';
import {ProfilePage} from '@/domains/profile/pages';

export const routes = [
  {
    path: '/',
    element: <Navigate to="/app" replace />,
  },
  {
    path: '/auth/login',
    element: <LoginPage />,
    errorElement: <ErrorPage message="Error loading login page" />,
  },
  {
    path: '/app',
    element: (
      <ProtectedRoute>
        <AppRoot />
      </ProtectedRoute>
    ),
    errorElement: (
      <MainLayout>
        <ErrorPage message="Error loading the app" />
      </MainLayout>
    ),
    children: [
      //{index: true, element: <DashboardPage />, children: [{index: true, element: <DashboardHomePage />}]},

      {index: true, element: <Navigate to="dashboard" replace />},
      {
        path: 'dashboard',
        element: <DashboardPage />,
        children: [
          {index: true, element: <DashboardTabHome />},
          {path: 'test/:id?', element: <DashboardTabTest />},
        ],
      },
      {path: 'profile/:id', element: <ProfilePage />},
      {path: '*', element: <NotFoundPage />},
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes);
