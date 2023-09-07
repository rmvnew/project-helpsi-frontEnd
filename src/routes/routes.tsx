import { Route, Routes } from "react-router-dom"
import Login from "../components/pages/Login"
import { Registry } from "../components/pages/Registry"
import CheckCode from "../components/pages/CheckCode"
import { Home } from "../components/pages/Home"
import { RecoverPass } from "../components/pages/RecoverPassword"

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