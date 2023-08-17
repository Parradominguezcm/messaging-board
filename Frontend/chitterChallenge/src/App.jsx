import './App.css';
import { Route, Routes } from "react-router-dom";
import AllPeeps from "./components/AllPeeps"
import { Login } from './components/Login';
import { SignUp } from "./components/SignUp";
function App() {

  return (
    <div className='Container'>

      <Routes>
        <Route path="/signup" element={< SignUp />} />
        <Route path="/login" element={< Login />} />
        <Route path="/" element={< AllPeeps />} />
      </Routes>
    </div>
  )
}

export default App
