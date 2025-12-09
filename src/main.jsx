import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { AppLayout } from './layout/AppLayout.jsx';
import App from './pages/App.jsx';
import Auteur from './pages/Auteur.jsx';
import { AuteurDetail } from './pages/AuteurDetail.jsx';
import { Page404 } from './pages/Page404.jsx';
import { PageDetail } from './pages/PageDetail.jsx';

// createRoot(document.getElementById('root')).render(<App />);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'detail/:isbn',
        element: <PageDetail />,
      },
      {
        path: '/auteurs',
        element: <Auteur />,
      },
      {
        path: '/auteurs/:id',
        element: <AuteurDetail />,
      },
    ],
    errorElement: <Page404 />,
  },
]);

const root = document.getElementById('root');

createRoot(root).render(<RouterProvider router={router} />);
