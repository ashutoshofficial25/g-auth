import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import AuthGuard from './guards/AuthGuard';
import GuestGuard from './guards/GuestGuard';
import { ElementType, Suspense, lazy } from 'react';

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Routes() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Chat />
            </GuestGuard>
          ),
        },
      ],
    },

    {
      path: '',
      element: (
        <AuthGuard>
          <Outlet />
        </AuthGuard>
      ),
      children: [
        {
          element: <Navigate to={'/chat'} replace />,
          index: true,
        },
        {
          path: 'chat',
          element: (
            <>
              <Chat />
            </>
          ),
        },
        {
          path: 'user',
          element: (
            <>
              <User />
            </>
          ),
        },
      ],
    },
  ]);
}

const Home = Loadable(lazy(() => import('./pages/home')));
const User = Loadable(lazy(() => import('./pages/user')));
const Login = Loadable(lazy(() => import('./pages/login')));
const Chat = Loadable(lazy(() => import('./pages/chat')));
