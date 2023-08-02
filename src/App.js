import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Navbar from "./components/navbar/navbar";
import { AbuseReport } from "./pages/abuse/AbuseReport";
import { ChildrenList } from "./pages/children/ChildrenList";
import { Report } from "./pages/report/Report";
import Login from "./pages/onboarding/Login";
import { Box } from "@chakra-ui/react";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <div>
      <Router>
        
        <Box>
          <Routes>
           
            <Route path='/' element={<Login />} />
            <Route path='admin/*' element={<AdminRoute />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
