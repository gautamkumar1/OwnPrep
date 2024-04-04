/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './compoents/Navbar'
import Error from './pages/Error'
import Footer from './compoents/Footer'
import Logout from './pages/Logout'
import AdminLayout from './compoents/layouts/AdminLayout'
import AdminUsers from './pages/AdminUsers'
import AdminContacts from './pages/AdminContacts'

function App() {
  return (
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Error/>}/>
        {/* NESTED ROUTE FOR ADMIN DASHBOARD */}
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='users' element={<AdminUsers/>} />
          <Route path='contacts' element={<AdminContacts/>} />
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App