import './App.css';
import { Route, Routes } from "react-router-dom";
import AllPeeps from "./components/AllPeeps"
import { Login } from './components/Login';
import { SignUp } from "./components/SignUp";
import { useEffect, useState } from 'react';
import { Authentication } from "./components/authentication/Authentication"
import { ProtectedRoute } from "./components/authentication/ProtectedRoute"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MakeAPeep } from './components/makeAPeep';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState()

  useEffect(
    () => {
      console.log(loggedInUser)
    }, [loggedInUser]
  )

  return (
    <div className='Container'>
      <Header />

      <Routes>
        <Route path="/" element={< AllPeeps />} />
        <Route path="/login" element={<Login loggedInUser={loggedInUser} loggedIn={loggedIn} setLoggedInUser={setLoggedInUser} setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={< SignUp />} />ç
        <Route path="/makeapeep" element={
          <ProtectedRoute
            isLoggedIn={loggedIn}
            loggedInComponent={<MakeAPeep loggedInUser={loggedInUser} />}
            loggedOutComponent={< Authentication />}
          />}
        />
      </Routes>

      <Footer setLogin={setLoggedIn} />
    </div>
  )
}

export default App
