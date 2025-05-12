// App.jsx

import DashboardLayout from "./Layouts/DashBoardlayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateBrand from "./pages/BrandManagement/CreateBrand";
import SeeBrands from "./pages/BrandManagement/SeeBrands";
import Generate from "./pages/Generate/Generate";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import InsightsLayout from "./Layouts/InsightLayout";
import Insights from "./pages/Insights/Insights";
import CreativeInsights from "./pages/Insights/CreativeInsights";
import CompetitorInsights from "./pages/Insights/competitorInsights";
import CompetitorInsightsDashboard from "./pages/Insights/CompetitorInsightsDashboard";
import InspirationBank from "./pages/Insights/CreativeInspirationBank";

import Compaigns from "./pages/Compaigns/Compaigns";
import ForecastLayout from "./Layouts/ForecastLayout";
import Forecast from "./pages/Forecast/Forecast";
import StepperLayout from "./components/ForecastComponents/Stepper/StepperLayout"
import Stepper from "./components/ForecastComponents/Stepper/Stepper";
import StepCreativeScoring from "./components/ForecastComponents/Stepper/Steps/CreativeScoringStep";
import ComplianceStepper from "./components/ForecastComponents/ComplianceCheckerAi/ComplianceStepper";
import EnhanceLayout from "./Layouts/EnhanceLayout";
import Enhance from "./pages/Enhance/Enhance";

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
        path: "/compaigns",
        element: <Compaigns />
      },
     {
        path: "/insights",
        element: <InsightsLayout />, // contains header + below header
        children: [
          { index: true, element: <Insights /> },
          { path: "creativeinsights", element: <CreativeInsights/> },
          { path: "competitorinsights", element: <CompetitorInsights/> },
          { path: "dashboard", element: <CompetitorInsightsDashboard/> },
          { path: "inspirationbank", element: <InspirationBank/> },
        ],
      },
     {
        path: "/forecast",
        element: <ForecastLayout />, // contains header + below header
        children: [
          // { index: true, element: <Stepper /> },
          { index: true, element: <Forecast /> },
          {  path: "stepper",  element: <Stepper /> },
          { path: "create", element: <StepCreativeScoring /> },
          { path: "compliancechecker", element: <ComplianceStepper /> },
          // ii want to use steepar here
        ],
      },
     {
        path: "/enhace",
        element: <EnhanceLayout />, // contains header + below header
        children: [
          { index: true, element: <Enhance /> },
          // {  path: "stepper",  element: <Stepper /> },
          // { path: "create", element: <StepCreativeScoring /> },
          // { path: "compliancechecker", element: <ComplianceStepper /> },
          // ii want to use steepar here
        ],
      },
   
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
