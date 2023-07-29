import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import Navbar from "./components/navbar/navbar";
import { AbuseReport } from "./pages/abuse/AbuseReport";
import { ChildrenList } from "./pages/children/ChildrenList";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className=' bg-dark '>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='abuse' element={<AbuseReport />} />
            <Route path='children' element={<ChildrenList />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
