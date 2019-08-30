import React from 'react';

export const DefaultLayout = React.lazy(() => import('containers/DefaultLayout'));

export const SignIn = React.lazy(() => import('pages/Public/SignIn'));

const Dashboard = React.lazy(() => import('pages/Secure/Dashboard'));

const routes = [
  {
    exact: true,
    name: 'Home',
    path: '/',
  },
  {
    component: Dashboard,
    exact: true,
    name: 'Dashboard',
    path: '/dashboard',
  },
];

export default routes;
