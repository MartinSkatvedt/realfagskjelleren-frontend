import React from "react";
import { Routes, Route } from "react-router-dom";
import { withOidcSecure } from "@axa-fr/react-oidc-context";
import Home from "../Pages/Home";
import DashBoard from "../Pages/Dashboard";
import Stock from "../Pages/Stock";
//const PageNotFound = () => <div>Page not found</div>;
const ProtectedDashboard = withOidcSecure(DashBoard);
const ProtectedStock = withOidcSecure(Stock);
const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<ProtectedDashboard />}></Route>
    <Route path="/stock" element={<ProtectedStock />}></Route>
  </Routes>
);

export default AppRoutes;
//    <Route component={PageNotFound} />
