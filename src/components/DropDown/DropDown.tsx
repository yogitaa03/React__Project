import React, { useContext } from 'react'
import "./DropDown.scss"
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../routes/Auth'
const DropDown = () => {

    const{logoutSuccess} = useContext(AuthContext)
   
  return (
    <div className="dropDown">
        <ul>
            <NavLink to="/userprofile" className="dropDownListProfile" style={(isActive) => ({color: isActive ? "white" : "", background: isActive ? "#5f6efa" : "" })}>
                Profile
            </NavLink>
            <li className="dropDownListLogout" onClick={logoutSuccess}>Logout</li>
        </ul>
    </div>
  )
}

export default DropDown
