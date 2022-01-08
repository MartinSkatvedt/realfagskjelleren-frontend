import React from "react";
import { Routes, Route } from "react-router-dom";
import { withOidcSecure } from "@axa-fr/react-oidc-context";
import Home from "../Pages/Home";
import DashBoard from "../Pages/Dashboard";
import Stock from "../Pages/Stock";
import Report from "../Pages/Report";
import Insight from "../Pages/Insight";
//const PageNotFound = () => <div>Page not found</div>;
const ProtectedDashboard = withOidcSecure(DashBoard);
const ProtectedStock = withOidcSecure(Stock);
const ProtectedReport = withOidcSecure(Report);
const ProtectedInsight = withOidcSecure(Insight);

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<ProtectedDashboard />}></Route>
    <Route path="/stock" element={<ProtectedStock />}></Route>
    <Route path="/report" element={<ProtectedReport />}></Route>
    <Route path="/insight" element={<ProtectedInsight />}></Route>
    {/* <Route component={PageNotFound}*/}
  </Routes>
);

export default AppRoutes;
