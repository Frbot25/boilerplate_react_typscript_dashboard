import React from 'react'
import { Outlet } from 'react-router-dom'
import { TabNav } from './TabNav'
export const Dashboard = () => {
  return (
    <div className='dashboard'> 
      <TabNav />
      <main>
      <Outlet />
      </main>
      
      </div>
  )
}
