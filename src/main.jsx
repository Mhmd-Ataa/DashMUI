import React from 'react'
import App from './App.jsx'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Team from './components/pages/Team/Team.jsx';
import Dashbord from './components/pages/Dashboard/Dashbord.jsx';
import Contacts from './components/pages/Contacts/Contacts.jsx';
import Invoices from './components/pages/Invoices/Invoices.jsx';
import Form from './components/pages/Form/Form.jsx';
import Calender from './components/pages/Calender/Calender.jsx';
import Faq from './components/pages/Faq/Faq.jsx';
import BarChart from './components/pages/BarChart/BarChart.jsx';
import PieChart from './components/pages/PieChart/PieChart.jsx';
import LineChart from './components/pages/LineChart/LineChart.jsx';
import Geography from './components/pages/Geography/Geography.jsx';




const router = createHashRouter([
  {path: "/", element: <App/>,children:[
    {index:true , element:<Dashbord/>},
    {path: "/team", element: <Team/>},
    {path: "/contact", element: <Contacts/>},
    {path: "/invoices", element: <Invoices/>},
    {path: "/form", element: <Form/>},
    {path: "/calendar", element: <Calender/>},
    {path: "/faq", element: <Faq/>},
    {path: "/bar", element: <BarChart/>},
    {path: "/pie", element: <PieChart/>},
    {path: "/line", element: <LineChart/>},
    {path: "/geography", element: <Geography/>},




  ]
 
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
