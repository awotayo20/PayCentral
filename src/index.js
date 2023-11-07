import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import JobStatus from './Component/SignUp Page/JobStatus';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './Component/SignUp Page/SignUp';
import Industry from './Component/SignUp Page/Industry';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/SignUp",
    element: <SignUp/>,
  },
  {
    path: "/JobStatus",
    element: <JobStatus/>,
  },
  {
    path: "/Industry",
    element: <Industry/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);