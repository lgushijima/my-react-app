import * as React from 'react';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {isUserAuthenticated} from '@/domains/auth/reducer/slice';

export const ProtectedRoute = ({children}) => {
  const isAuthenticated = useSelector(isUserAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={`/auth/login`} replace />;
  }

  return children;
};
