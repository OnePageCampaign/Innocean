import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Letter from "./pages/Letter/Letter";
import Youth4Cut from "./pages/Youth4Cut/Youth4Cut";
import YouthMoment from "./pages/YouthMoment/YouthMoment";
import Send from "./pages/Send/Send";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "letter",
        element: <Letter />,
      },
      {
        path: "send",
        element: <Send />,
      },
      {
        path: "youth-4cut",
        element: <Youth4Cut />,
      },
      {
        path: "youth-moment",
        element: <YouthMoment />,
      },
      
    ],
  },
]);

export default router;
