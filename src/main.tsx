import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import UsersScreen from './screens/UsersScreen.tsx'
import App from './components/App.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/user",
      element: <UsersScreen />,
    },
    {
      path: "/post",
      element: <div>postScreen</div>,
    },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
