import React, {FC, useContext} from "react"
import "./AppLayout.scss"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../routes/Auth"



const SideBar: FC = () =>
    {
        // const {logoutSuccess} = useContext(AuthContext)
        return(
            <div className="sidebar">
                <div className="sidebarOptionDefault">Content</div>
                <a href="" className="sidebarOption">Home</a>
                <NavLink to="/user" className="sidebarOption" style={({isActive}) => ({color: isActive ? "white" : "", background:isActive ? "#5f6efa" : "" })}>
                    Users
                </NavLink>
                <a href="" className="sidebarOption">Contact</a>
                <a href="" className="sidebarOption">About</a>
                <a href="" className="sidebarOption">Support</a>
            </div>
        )
    }

export default SideBar  