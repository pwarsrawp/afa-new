import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Actividades from "./pages/Actividades"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Signup />} />
        <Route path='/perfil' element={<Profile />} />
        <Route path='/actividades' element={<Actividades />} />
      </Routes>
    </>
  )
}

export default App
