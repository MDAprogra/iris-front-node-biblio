import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import App from './pages/App.jsx';
import { PageDetail } from './pages/PageDetail.jsx';

// createRoot(document.getElementById('root')).render(<App />);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'detail/:isbn',
    element: <PageDetail />,
  },
]);

const root = document.getElementById('root');

createRoot(root).render(<RouterProvider router={router} />);
