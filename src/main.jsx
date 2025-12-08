import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import App from './App.jsx';

// createRoot(document.getElementById('root')).render(<App />);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const root = document.getElementById('root');

createRoot(root).render(<RouterProvider router={router} />);
