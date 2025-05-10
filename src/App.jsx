// App.jsx

import DashboardLayout from "./DashBoardlayout";
import Dashboard from "./pages/Dashboard";
import CreateBrand from "./pages/CreateBrand";
import SeeBrands from "./pages/SeeBrands";
import Generate from "./pages/Generate";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Insights from "./pages/Insights";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/createbrand",
        element: <CreateBrand />
      },
      {
        path: "/seebrands",
        element: <SeeBrands />
      },
      {
        path: "/generate",
        element: <Generate />
      },
      {
        path: "/insights",
        element: <Insights />
      },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
