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
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getData } from "../api/api";

function AdminRoute() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [children, setChildren] = useState([]);
  useEffect(() => {
    const password = "123456";
    const auth = localStorage.getItem("admin");
    if (auth !== password) {
      navigate("/");
      toast.error("Please Login");
    }
  }, [navigate]);

  const loadChildren = () => {
    setLoading(true);

    const link = "view/children-list.php";
    getData(link)
      .then((res) => {
        setChildren(res.data);
        // console.log(children);
        // setLoading
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadChildren();
  }, []);
  return (
    <div>
      <Box>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard children={children.length} />} />
          <Route path='/abuse' element={<AbuseReport />} />
          <Route
            path='/children'
            element={<ChildrenList children={children} />}
          />
        </Routes>
      </Box>
    </div>
  );
}

export default AdminRoute;
