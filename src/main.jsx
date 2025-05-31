import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AllAritsts,
  Browse,
  Download,
  Home,
  InstallApp,
  SideNav,
  TrandingSong,
} from "./components/index.js";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { HomePage, LoginPage, SignupPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/side",
            element: <SideNav />,
          },
          {
            path: "/install",
            element: <InstallApp />,
          },
          {
            path: "/artists",
            element: <AllAritsts />,
          },
          {
            path: "/browse",
            element: <Browse />,
          },
          {
            path: "/tranding",
            element: <TrandingSong />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/download",
        element: <Download />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
