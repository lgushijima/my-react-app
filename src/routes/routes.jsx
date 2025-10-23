import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ProtectedRoute } from './protected-route';
import { MainLayout } from '../components/layout/main-layout';
import { AppRoot } from './app-root';
import { NotFoundPage, ErrorPage } from '../components/errors';

import { LoginPage } from '@/domains/auth/pages';
import { DashboardPage } from '@/domains/dashboard/pages';
import { ProfilePage } from '@/domains/profile/pages';



export const routes = [
  {
    path: '/',
    element: <Navigate to='/app' replace />
  },
  {
    path: '/auth/login',
    element: <LoginPage />,
    errorElement: <ErrorPage message='Error loading login page' />
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
        <ErrorPage message='Error loading the app' />
      </MainLayout>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'profile/:id', element: <ProfilePage /> },
      { path: '*', element: <NotFoundPage /> }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: <ErrorPage />
  }
];

export const router = createBrowserRouter(routes);
