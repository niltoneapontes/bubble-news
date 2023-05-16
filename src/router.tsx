import { createBrowserRouter } from "react-router-dom"
import Splash from "./pages/Splash";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
]);