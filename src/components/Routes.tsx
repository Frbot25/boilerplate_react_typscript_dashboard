import React, { useState } from 'react'
import { Route, Routes, Navigate} from 'react-router-dom';
import { Dashboard } from './admin/Dashboard';
import { Home } from './public/Home';
import { Login } from './admin/Login';
import { PageNotFound } from './public/PageNotFound';
import { Projects } from './public/Projects';
import { Contact } from './public/Contact';
import { ProjectsAdmin } from './admin/Projects';
import { AddProjects } from './admin/AddProjects';
import { AddCategories } from './admin/AddCategories';
import { Categories } from './admin/Categories';

export const Router = () => {
  const [ user, setUser ] = useState(true)
  return (
    <div>
        <Routes>
          {/* Roues Public */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Routes Admin */}
          <Route path="/dashboard" element={<Dashboard />}>
            {
              !user &&
              <Route path='/dashboard' element={<Navigate replace to="login" />}/>
            }
            <Route path="login" element={<Login />} />
            <Route path="Projects" element={<ProjectsAdmin />} />
            <Route path="addproject" element={<AddProjects />} />
            <Route path="categories" element={<Categories />} />
            <Route path="addcategories" element={<AddCategories />} />
          </Route>
          {/* Route 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
