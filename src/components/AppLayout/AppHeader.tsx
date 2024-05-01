import React, { FC, useContext, useState } from "react"
import Contender from "../../assets/images/contentder__image.jpg"
import "./AppLayout.scss"
import { AuthContext } from "../../routes/Auth"
import DropDown from "../DropDown/DropDown"

export const Header: FC = () => {
    const { loginUserData } = useContext(AuthContext)
    const [isDropDown, setIsDropDown] = useState<boolean>(false)
    const handleMouseEnter = () => {
        setIsDropDown(true)
    }
    const handleMouseLeave = () => {
        setIsDropDown(false)
    }
    return (
        <>
            <header className="header">
                <div className="headerLeft">
                    <img src={Contender} className="headerLeftImage" />
                    <p className="headerLeftText"><b>contentder</b></p>
                </div>
                <div className="headerRight">
                    <div className="headerRightUsername">
                        <div className="loginUserName">{loginUserData.name.toUpperCase()}</div>
                        <div className="headerRightImg" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={loginUserData.Img_URL} alt="" className="loginUserImage" />
                            {isDropDown && <DropDown/>}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )

}
