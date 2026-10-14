import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/HomePage'
import FeedDetailPage from './pages/FeedDetailPage'
import MyFeedPage from './pages/MyFeedPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element ={<Homepage />} />
        <Route path="/feeds/:id" element={<FeedDetailPage />} /> 
        <Route path="/my-feeds" element={<MyFeedPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>  
    
  )
}

export default App
