import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpForm from "./Component/Form/SignUpForm";
import posthog from "posthog-js";


posthog.init("phc_nb12RHxB4ujxFPr0YLePTwRq70L5M28O3g0a6rZeVln", {
  api_host: "https://app.posthog.com",
});



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/SignUpForm",
    element: <SignUpForm />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
