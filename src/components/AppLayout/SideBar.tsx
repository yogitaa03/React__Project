import React, {FC} from "react"
import "./AppLayout.css"



const SideBar: FC = () =>
    {
        return(
            <div className="sidebar">
                <div className="sidebarOptionDefault">Content</div>
                <a href="" className="sidebarOptionUser">Users</a>
                <a href="" className="sidebarOption">Home</a>
                <a href="" className="sidebarOption">About</a>
                <a href="" className="sidebarOption">Contact</a>
                <a href="" className="sidebarOption">Support</a> 
            </div>
        )
    }

export default SideBar  