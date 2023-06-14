
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import Navbar from './components/navbar/navbar';
import { AbuseReport } from './pages/abuse/AbuseReport';
import { ChildrenList } from './pages/children/ChildrenList';

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
        <div className='p-2 bg-dark ' >
          <Routes>
            <Route path='/'  element={<Dashboard />} />
            <Route path='abuse'  element={<AbuseReport />} />
            <Route path='children'  element={<ChildrenList />} />
          </Routes>
        </div>
     
      </Router>
    </div>
  );
}

export default App;
