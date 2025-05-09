// App.jsx

import DashboardLayout from "./DashBoardlayout";
import Dashboard from "./pages/Dashboard";
import BrandManagement from "./pages/BrandManagement";
import BrandManagement2 from "./pages/BrandManagement2";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
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
        path: "/brandmanagement",
        element: <BrandManagement />
      },
      {
        path: "/brandmanagement/createbrand",
        element: <BrandManagement2 />
      },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
