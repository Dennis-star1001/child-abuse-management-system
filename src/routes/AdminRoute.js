// import React, { useEffect } from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/navbar/navbar";

import { Box } from "@chakra-ui/react";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { AbuseReport } from "../pages/abuse/AbuseReport";
import { ChildrenList } from "../pages/children/ChildrenList";
import { useEffect } from "react";
import { toast } from "react-toastify";

function AdminRoute() {
  const navigate = useNavigate();
  useEffect(() => {
    const password = "123456";
    const auth = localStorage.getItem("admin");
    if (auth !== password) {
      navigate("/");
      toast.error("Please Login");
    }
  }, [navigate]);
  return (
    <div>
      <Box>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/abuse' element={<AbuseReport />} />
          <Route path='/children' element={<ChildrenList />} />
        </Routes>
      </Box>
    </div>
  );
}

export default AdminRoute;
