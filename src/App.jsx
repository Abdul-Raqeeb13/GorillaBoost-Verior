// App.jsx

import DashboardLayout from "./DashBoardlayout";
import Dashboard from "./pages/Dashboard";
import CreateBrand from "./pages/CreateBrand";
import SeeBrands from "./pages/SeeBrands";
import Generate from "./pages/Generate";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Insights from "./pages/Insights";
import InsightsLayout from "./components/InsightsComponents/InsightLayout";
import CreativeInsights from "./pages/CreativeInsights";
import CompetitorInsights from "./pages/competitorInsights";
import CompetitorInsightsDashboard from "./pages/CompetitorInsightsDashboard";

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
        element: <InsightsLayout />, // contains header + below header
        children: [
          { index: true, element: <Insights /> },
          { path: "creativeinsights", element: <CreativeInsights/> },
          { path: "competitorinsights", element: <CompetitorInsights/> },
          { path: "dashboard", element: <CompetitorInsightsDashboard/> },
        ],
      },
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
