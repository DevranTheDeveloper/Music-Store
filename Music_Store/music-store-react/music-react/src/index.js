import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './pages/App';
import Contact from './pages/Contact';
import Instuments from './pages/Instruments';
import Signin from './pages/Signin';
import User from './pages/User';
import About from './pages/About';
import Cart from './pages/Cart';
import Detail from './pages/Detail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "instruments",
    element: <Instuments/>,
  },
  {
    path: "signin",
    element: <Signin/>,
  },
  {
    path: "user",
    element: <User/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "cart",
    element: <Cart/>,
  },
  {
    path: "details",
    element: <Detail/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />  
);
