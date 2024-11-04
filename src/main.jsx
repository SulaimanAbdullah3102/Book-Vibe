import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Errorpage from './components/Errorpage';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Bookdetails from './components/Bookdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
       
      {
        path: "/books/:bookId",
        element: <Bookdetails></Bookdetails>,
        loader : () => fetch('/public/booksData.json')
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
