import React, { useState, useEffect } from 'react';
import '../App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import MakeReservation from './MakeReservation';
import TheStake from './Restaurants/TheStake'

function App() {

  const [data, setData] = useState([])

  // fetch function
  const fetchData = async () =>  {
    const r = await fetch ('http://localhost:3000/resos/')
    const s = await r.json()
    setData(s)
  }
  // fetch from JSON
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div className="App">
      

        <Navbar />

        <Routes>

          <Route path="/MakeReservation" element={<MakeReservation data={data} />} />
          <Route path="/Restaurants/TheStake" />

        </Routes>

      
    </div>
  );
}

export default App;
