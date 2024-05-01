import React, { useContext } from "react"
import { FC } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "./Auth"

const PrivateRoute:FC = () => {
    const { isAuthenticated } = useContext(AuthContext)
    return (!isAuthenticated ? <Navigate to="userlogin" replace /> : <Outlet />)
}

export default PrivateRoute
