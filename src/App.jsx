import { useState } from 'react'
import './App.css'
import Register from './Pages/Register'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignOut from './Pages/SignOut'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <>
      <div className="  bg-[#cccccc] min-h-screen">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;