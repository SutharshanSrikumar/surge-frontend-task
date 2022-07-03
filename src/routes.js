import { Navigate, Outlet } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import Login from "./views/Login";

export const routes = [

  {
    path: "login",
    element: <LoginLayout />,
    children: [
      { index: true, element:  <Login /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "login", element: <LoginLayout /> },
      { path: "404", element: <>not fount</> },
      { path: "/", element: <Navigate to="/login" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
]

