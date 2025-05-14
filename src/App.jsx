// App.jsx
import "@fontsource/ibm-plex-sans"; // This will load the IBM Plex Sans font

import DashboardLayout from "./Layouts/DashBoardlayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateBrand from "./pages/BrandManagement/CreateBrand";
import SeeBrands from "./pages/BrandManagement/SeeBrands";
import Generate from "./pages/Generate/Generate";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import "./index.css"
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
import EnhanceBgRemoverAI from "./pages/Enhance/EnhanceBgRemoverAI";
import EnhanceUpscaleAi from "./pages/Enhance/EnhanceUpScalerAi";
import EnhanceFaceAi from "./pages/Enhance/EnhanceFaceAI";
import EnhanceEraserReplacerAi from "./pages/Enhance/EnhanceEraserReplacerAi";



import GenerateLayout from "./Layouts/GenerateLayout";
import MVAS from "./components/GenerateComponents/MVA/MVA_Stepper";
import HIPPS from "./components/GenerateComponents/HIPP/HIPP_Stepper";

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
        path: "/compaigns",
        element: <Compaigns />
      },
     {
        path: "/generate",
        element: <GenerateLayout />, // contains header + below header
        children: [
          { index: true, element: <Generate /> },
          { path: "mva", element: <MVAS/> },
          { path: "hipp", element: <HIPPS/> },
          // { path: "competitorinsights", element: <CompetitorInsights/> },
          // { path: "dashboard", element: <CompetitorInsightsDashboard/> },
          // { path: "inspirationbank", element: <InspirationBank/> },
        ],
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
        path: "/enhance",
        element: <EnhanceLayout />, // contains header + below header
        children: [
          { index: true, element: <Enhance /> },
          {  path: "bgremover",  element: <EnhanceBgRemoverAI /> },
          { path: "upscale", element: <EnhanceUpscaleAi /> },
          { path: "faceenhancer", element: <EnhanceFaceAi /> },
          { path: "erasereplace", element: <EnhanceEraserReplacerAi /> },
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
