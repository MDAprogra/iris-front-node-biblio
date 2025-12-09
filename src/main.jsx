import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { AppLayout } from './layout/AppLayout.jsx';
import { AuteurDetail } from './pages/auteur/detail.jsx';
import { Add } from './pages/book/add.jsx';
import { PageDetail } from './pages/book/detail.jsx';
import App from './pages/book/list.jsx';
import { Page404 } from './pages/Page404.jsx';

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
        element: <AuteurDetail />,
      },
      {
        path: '/auteurs/:id',
        element: <AuteurDetail />,
      },
      {
        path: '/add',
        element: <Add />,
      },
    ],
    errorElement: <Page404 />,
  },
]);

const root = document.getElementById('root');

createRoot(root).render(<RouterProvider router={router} />);
