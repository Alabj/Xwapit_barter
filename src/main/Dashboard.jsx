import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'

import Navbar from '../subscript/Navbar'
import LandingPage from './LandingPage'
import Layout from '../subscript/Layout'
import NoLayout from '../subscript/NoLayout'
import Login from '../startUp/Login'
import CategorySelect from '../startUp/CategorySelect'
import CreateAccount from '../startUp/CreateAccount'
import ContactUs from '../startUp/ContactUs'
import VerifyOtp from '../startUp/VerifyOtp'
import ForgotPassword from '../startUp/ForgotPassword'

const Dashboard = () => {

  return (
    // <div>
    //     <Navbar/>
    //     <LandingPage/>
    // </div>

    <Routes>
          <Route element={<Layout/>}>
              <Route path='/' element={<LandingPage/>}/>
          </Route>

          <Route element={<NoLayout/>}>
              <Route path='Login' element={<Login/>}/>
              <Route path='CategorySelect' element={<CategorySelect/>}/>
              <Route path='CreateAccount' element={<CreateAccount/>}/>
              <Route path='ContactUs' element={<ContactUs/>}/>
              <Route path='VerifyOtp' element={<VerifyOtp/>}/>
              <Route path='ForgotPassword' element={<ForgotPassword/>}/>
          </Route>

    </Routes>
  )
}

export default Dashboard