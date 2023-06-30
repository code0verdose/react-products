import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../../../pages/Main/Main";
import { Time } from "../../../../pages/Time/Time";
import { Login } from "../../../../pages/Login/Login";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/time",
    element: <Time />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <h1>404 Page Not Found</h1>,
  },
]);
