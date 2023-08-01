import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Navbar from "./components/navbar/navbar";
import { AbuseReport } from "./pages/abuse/AbuseReport";
import { ChildrenList } from "./pages/children/ChildrenList";
import { Report } from "./pages/report/Report";
import Login from "./pages/onboarding/Login";
import { AdminRoute } from "./routes/AdminRoute";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      {/* <Router> */}
      {/* <div className='absolute'> */}
      <Navbar />
      {/* </div> */}
      <div className='absolute w-full pt-12 lg:w-[85%] right-0 top-20'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='abuse' element={<AbuseReport />} />
          <Route path='children' element={<ChildrenList />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
