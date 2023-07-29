import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { AbuseReport } from '../pages/abuse/AbuseReport';
import { ChildrenList } from '../pages/children/ChildrenList';
import { Report } from '../pages/report/Report';

export const AdminRoute = () => {
  return (
    <div>
     
        <Navbar>
          <div className='p-2 bg-dark ' >
            <Routes>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='abuse' element={<AbuseReport />} />
              <Route path='children' element={<ChildrenList />} />
              <Route path='report' element={<Report />} />
            
            </Routes>
          </div>
        </Navbar>
    
    </div>
  )
}
