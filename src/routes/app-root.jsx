import * as React from 'react';
import { matchRoutes, Outlet, useLocation } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import { NotFoundPage } from '@/components/errors';
import { routes } from './routes';

export const AppRoot = () => {
  const location = useLocation();
  const matchedRoute = matchRoutes(routes, location?.pathname);
  const currentPath = React.useMemo(() => {
    if (matchedRoute && matchedRoute.length > 1) {
      const routePath = matchedRoute[1].route?.path;
      if (routePath) return routePath;
    }
    return '';
  }, [matchedRoute]);

//   if (isLoading) return <PermissionErrorLayout error='Checking permission...' />;
//   if (isError) return <PermissionErrorLayout error={errorMessage} />;
//   if (!hasData) return <PermissionErrorLayout error='No permission data available' />;

  const isRouteAvailable = true //(has permission to currentPath);
  return <MainLayout>{isRouteAvailable ? <Outlet /> : <NotFoundPage />}</MainLayout>;
};
