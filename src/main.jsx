import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './startUp/Login.jsx'
import ForgotPassword from './startUp/ForgotPassword.jsx'
import ContactUs from './startUp/ContactUs.jsx'
import CategorySelect from './startUp/CategorySelect.jsx'
import VerifyOtp from './startUp/VerifyOtp.jsx'
import Navbar from './subscript/Navbar.jsx'
import Dashboard from './main/Dashboard.jsx'
import LandingPage from './main/LandingPage.jsx'
import CreateAccount from './startUp/CreateAccount.jsx'
// import ModalO from './justTesting/openModal.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Dashboard/>
    </BrowserRouter>
  </React.StrictMode>,
)
