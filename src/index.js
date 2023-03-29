import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import Login from './routes/Login';
import Products from './routes/Products/ProductsMain';
import ProductsPost from './routes/Products/ProductsPost'
import Categories from './routes/Categories/CategoriesMain';
import CategoriesPost from './routes/Categories/CategoriesPost';

import ErrorPage from './routes/ErrorPage';
import NavBar from './components/NavBar';
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
        path: "login",
        element: <Login />
      },
      {
        path: "products",
        element: <ProductsPost />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "categories/post",
        element: <CategoriesPost />
      },
    ]
  }
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);