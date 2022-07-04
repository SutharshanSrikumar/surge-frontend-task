import { Navigate, Outlet } from "react-router-dom";
import LoginLayout from "./layouts/LoginLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./views/Login";
import UserList from "./views/UserList";
import NotesList from "./views/NotesList";
import FirstTimeLogin from "./views/FirstTimeLogin";

export const routes = [

  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "users", element: <UserList /> },
      { path: "notes", element: <NotesList /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "login",
    element: <LoginLayout />,
    children: [
      { index: true, element:  <Login /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "update-password",
    element: <LoginLayout />,
    children: [
      { index: true, element:  <FirstTimeLogin /> },
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