import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Nosotros from './Components/Nosotros.jsx'
import Soporte from './Components/Soporte.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from './Crud/LoginPage.jsx'
import RegisterPage from './Crud/RegisterPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Nosotros",
    element: <Nosotros />
  },
  {
    path: "Soporte",
    element: <Soporte />
  },
  {
    path: "/LoginPage",
    element: <LoginPage />
  },
  {
    path: "/RegisterPage",
    element: <RegisterPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);