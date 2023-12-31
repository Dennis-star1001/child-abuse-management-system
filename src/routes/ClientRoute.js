// import React, { useEffect } from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/navbar/ClientNavbar";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getData } from "../api/api";
import { Dashboard } from "../pages/clientpages/dashboard/Dashboard";
import { ProfileOfChild, ViewCase } from "../pages/clientpages/case/ViewCase";
import { CaseDetails } from "../pages/clientpages/case/components/CaseDetails";
import { Profile } from "../pages/clientpages/profile/Profile";
import { Case } from "../pages/clientpages/case/Case";
// import { Case } from "../pages/case/Case";

function ClientRoute() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [children, setChildren] = useState([]);
  const [cases, setCase] = useState([]);
  const [client, setClient] = useState([]);
  console.log("Client", client);
  useEffect(() => {
    const auth = localStorage.getItem("client");
    if (!auth) {
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

  const loadProfile = () => {
    const email = localStorage.getItem("client");
    if (email) {
      const url = `view/profile.php?email=${email}`;
      getData(url)
        .then((res) => {
          setClient(res.data);
          // console.log(res.data, "response");
        })
        .catch((err) => {
          toast.error("error !!!");
        });
    } else {
      // navigate("/");
      toast("error please logout!!!");
    }
  };
  const loadCases = () => {
    const email = localStorage.getItem("client");
    if (email) {
      const url = `view/view-client-case.php?email=${email}`;
      getData(url)
        .then((res) => {
          setCase(res.data);
          // console.log(res.data, "dartrrt");
        })
        .catch((err) => {
          toast.error("error !!!");
        });
    } else {
      // navigate("/");
      toast("error please logout!!!");
    }
  };
  const data = client[0];

  useEffect(() => {
    loadProfile();
    loadCases();
  }, []);
  return (
    <div>
      <Box>
        <Navbar
          firstname={data && data.firstname}
          lastname={data && data.lastname}
        />
        <Routes>
          <Route
            path='/'
            element={<Dashboard cases={cases} children={children.length} />}
          />
          {/* <Route path='/abuse' element={<AbuseReport />} /> */}
          {/* <Route
            path='/children'
            element={
              <ChildrenList loadChildren={loadChildren} children={children} />
            }
          /> */}
          <Route
            path='/profile'
            element={
              <Profile
                loadChildren={loadProfile}
                cases={cases}
                children={client}
                data={data}
              />
            }
          />
          <Route
            path='/case'
            element={
              <Case
                loadCases={loadCases}
                name={data && data.firstname}
                cases={cases}
              />
            }
          />
          <Route
            path='/case/child-case/:id'
            element={<ViewCase cases={cases} />}
          />
        </Routes>
      </Box>
    </div>
  );
}

export default ClientRoute;
