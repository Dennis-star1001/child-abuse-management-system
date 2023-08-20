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
// import { Case } from "../pages/case/Case";
import { ProfileOfChild } from "../pages/case/ProfileOfChild";
import { Case } from "../pages/case/Case";
import { ViewCase } from "../pages/case/ViewCase";

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
        console.log(res.data, "test");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
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
        toast.error(err);
      });
  };
  useEffect(() => {
    loadChildren();
    loadCases();
  }, []);
  // console.log(children[0].firstname)
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
              <ChildrenList
                loadChildren={loadChildren}
                cases={cases}
                children={children}
              />
            }
          />
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/case' element={<Case cases={cases} />} />
          {/* <Route
            path='/children'
            element={<ChildrenList reload={children} children={[]} />}
          /> */}
          <Route
            path='/child-profile/:id'
            element={
              <ProfileOfChild
                loadCases={loadCases}
                loadChildren={loadChildren}
                cases={cases}
                children={children}
              />
            }
          />
          <Route
            path='/case/child-case/:id'
            element={<ViewCase loadCases={loadCases} cases={cases} />}
          />
        </Routes>
      </Box>
    </div>
  );
}

export default AdminRoute;
