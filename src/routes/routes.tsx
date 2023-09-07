import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import { Registry } from "../pages/Registry"
import CheckCode from "../pages/CheckCode"
import { Home } from "../pages/Home"
import { RecoverPass } from "../pages/RecoverPassword"

export const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/CheckCode" element={<CheckCode />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recoverpass" element={<RecoverPass />} />
        
      </Routes>
    )
}