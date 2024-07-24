import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Services from "./Pages/Services";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import About from './Pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Services",
    element:<Services />
  },
  {
    path: "About",
    element: <About/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
    <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
