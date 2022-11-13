import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const TabNav = () => {
  return (
    <>
    <div className='navbar-admin'>
      <h2>Dashboard</h2>
      <h3>Admin navigation</h3>
      <nav>
        <ul>
          <li><Link to ="/dashboard/projects">All projects</Link></li>
          <li><Link to ="/dashboard/addproject">Add projects</Link></li>
          <li><Link to ="/dashboard/categories">All categories</Link></li>
          <li><Link to ="/dashboard/addcategories">Add categories</Link></li>
          <li><Link to ="/dashboard/logout">Logout</Link></li>
        </ul>
      </nav>
    </div>

    </>
  )
}
