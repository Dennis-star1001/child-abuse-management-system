
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import Navbar from './components/navbar/navbar';
import { AbuseReport } from './pages/abuse/AbuseReport';
import { ChildrenList } from './pages/children/ChildrenList';
import { Report } from './pages/report/Report';
import Login from './pages/onboarding/Login';
import { AdminRoute } from './routes/AdminRoute';

function App() {
  return (
    <div>
      <Router>
       
          <div className=' bg-dark ' >
            <Routes>
              <Route path='admin/*' element={<AdminRoute />} />
              <Route path='/' element={<Login />} />
            </Routes>
          </div>
       
      </Router>
    </div>
  );
}

export default App;
