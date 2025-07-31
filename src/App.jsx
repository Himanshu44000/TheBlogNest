import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authservice from "./appwrite/auth.js"
import {login , logout} from "./store/authSlice.js"
import './App.css'
import { Header, Footer } from  "../src/components/index.js"
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispach = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispach(login(userData))
        } else {
          dispach(logout())
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        dispach(logout())
      })
      .finally(() => {
        setLoading(false)
      }
  )}, [])


return !loading ? (
  <div className="min-h-screen flex flex-col">
    <Header />
    
    <main className="flex-grow">
      <Outlet />
    </main>

    <Footer />
  </div>
) : null;
 
}

export default App

//there is one error you can create account with password of any character long but during signup it demands for atleast 8 to 256 characters long