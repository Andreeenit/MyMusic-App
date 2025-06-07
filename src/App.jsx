/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './App.css'
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import MusicList from "./Components/MusicList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [musicGroup, setMusicGroup] = useState([])
  const [page, setPage] = useState(0)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/MusicGroup/Read?seeded=true&flat=true&pageNr=${page}&pageSize=10`);
        const result = await res.json();
        setMusicGroup(result.pageItems)
        console.log(result)
      } catch (err) {
        console.log(err)
      }
  }
  fetchData();
  }, [page])
  
  const handlePrevious = () => {
    setPage((prev) => prev - 1)
  }
  
  const handleNext = () => {
    if(page === 10) {
      setPage(0)
    } 
    else{
      setPage((prev) => prev + 1)

    }
  }

  return (
    <div className="app">
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MusicList" element={<MusicList group={musicGroup} previous={handlePrevious} next={handleNext} />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;
