import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/onboarding/Login";
import { Box } from "@chakra-ui/react";
import AdminRoute from "./routes/AdminRoute";
import Registration from "./pages/onboarding/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClientRoute from "./routes/ClientRoute";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from "react";
function App() {
 
  

  return (
    <div>
        
      <TawkMessengerReact
        propertyId="64dbe47acc26a871b02f7420"
        widgetId="default" />
      <Router>
        <ToastContainer />
        <Box>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='register' element={<Registration />} />
            <Route path='admin/*' element={<AdminRoute />} />
            <Route path='client/*' element={<ClientRoute />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
