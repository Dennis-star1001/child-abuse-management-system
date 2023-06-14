import React from 'react'
import Stats from '../../components/Stats'
import Bar from '../../components/chart/Bar'

export const Dashboard = () => {
  return (
    <div >
      <header className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-medium tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
          <Stats/>
        
        </div>
        
      </main>
    </div>
  )
}
