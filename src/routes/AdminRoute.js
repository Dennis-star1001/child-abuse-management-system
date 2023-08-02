import "../App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "../components/navbar/navbar";


import { Box } from "@chakra-ui/react";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { AbuseReport } from "../pages/abuse/AbuseReport";
import { ChildrenList } from "../pages/children/ChildrenList";

function AdminRoute() {
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
