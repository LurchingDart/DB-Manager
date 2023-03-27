import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import Products from './routes/Products';
import NavBar from './components/NavBar';
import Login from './routes/Login';
import Categories from './routes/Categories';
import Test from './routes/App';
import ErrorPage from './routes/ErrorPage';
import "./styles/index.css"


const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "login",
        element: <Login />
      },
    ]
  }
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);