/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './App.css'
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import MusicList from "./Components/MusicList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [musicGroup, setMusicGroup] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`/api/api/MusicGroup/Read?pageNr=${page}&pageSize=10`)
    .then(res => res.json())
    .then(data => setMusicGroup(data.pageItems))
    .catch(err => console.error(err))
  }, [page])




  return (
    <div className="app">
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MusicList" element={<MusicList group={musicGroup} page={setPage}/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;
