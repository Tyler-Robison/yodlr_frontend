import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import RegisterForm from "./RegisterForm";
import Admin from "./Admin";

const RouteList = () => {

    return (
        <Routes>

            {/* homepage */}
            <Route path="/yodlr" element={<Home />} />

            <Route path="/register" element={<RegisterForm />} />
            <Route path="/admin_panel" element={<Admin />} />


            {/* re-direct routes */}
            <Route path="/" element={<Navigate replace to="/yodlr" />} />
            <Route path='*' element={<Navigate replace to="/yodlr" />} />
        </Routes>
    )
}

export default RouteList;