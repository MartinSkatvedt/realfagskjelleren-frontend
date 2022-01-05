import React from "react";
import { Routes, Route } from "react-router-dom";
import { withOidcSecure } from "@axa-fr/react-oidc-context";
import Home from "../Pages/Home";
import DashBoard from "../Pages/Dashboard";

//const PageNotFound = () => <div>Page not found</div>;
const ProtectedDashboard = withOidcSecure(DashBoard);

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<ProtectedDashboard />}></Route>
  </Routes>
);

export default AppRoutes;
//    <Route component={PageNotFound} />
