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
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getData } from "../api/api";
import { Profile } from "../pages/profile/Profile";
import { Case } from "../pages/case/Case";
import { ProfileOfChild } from "../pages/case/ProfileOfChild";

function AdminRoute() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [children, setChildren] = useState([]);
  const [cases, setCase] = useState([]);
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loadCases = () => {
    setLoading(true);
    const link = "view/get-case.php";
    getData(link)
      .then((res) => {
        setCase(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadChildren();
    loadCases();
  }, []);
  return (
    <div>
      <Box>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Dashboard cases={cases} children={children.length} />}
          />
          {/* <Route path='/abuse' element={<AbuseReport />} /> */}
          <Route
            path='/children'
            element={
              <ChildrenList loadChildren={loadChildren} children={children} />
            }
          />
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/case' element={<Case cases={cases} />} />
          {/* <Route
            path='/children'
            element={<ChildrenList reload={children} children={[]} />}
          /> */}
          <Route path='/child-profile/:id' element={<ProfileOfChild />} />
        </Routes>
      </Box>
    </div>
  );
}

export default AdminRoute;
