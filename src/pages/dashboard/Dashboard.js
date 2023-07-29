import React from 'react'
import Stats from '../../components/Stats'
import Bar from '../../components/chart/Bar'

export const Dashboard = () => {
  return (
    <div >
      
      <main>
        <div className="mx-auto max-w-7xl  sm:px-6 lg:px-8">
          <Stats/>
        
        </div>
        
      </main>
    </div>
  )
}
