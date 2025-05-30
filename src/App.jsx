/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import MusicList from "./Components/MusicList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MusicList" element={<MusicList />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
