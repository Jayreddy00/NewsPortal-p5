import React from 'react'
//import { Button } from './components/ui/button'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Signin from './auth/forms/Signin'
import Signup from './auth/forms/Signup'
import About from './pages/about'
import Dashboard from './pages/dashboard'
import NewsArticles from './pages/NewsArticles'
import Header from './components/shared/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/sign-in" element={<Signin/>} />
      <Route path="/sign-up" element={<Signup/>} />

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/news" element={<NewsArticles />} />
      </Routes>
      </BrowserRouter>
    )
}

export default App