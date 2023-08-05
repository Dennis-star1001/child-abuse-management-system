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
import { ChildrenList } from "../pages/children/ChildrenList";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Profile } from "../pages/profile/Profile";
import { Case } from "../pages/case/Case";
import { ProfileOfChild } from "../pages/case/ProfileOfChild";

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
          <Route path='/profile' element={<Profile />} />
          <Route path='/case' element={<Case />} />
          <Route path='/children' element={<ChildrenList />} />
          <Route path='/child-profile/:id' element={<ProfileOfChild />} />
        </Routes>
      </Box>
    </div>
  );
}

export default AdminRoute;
