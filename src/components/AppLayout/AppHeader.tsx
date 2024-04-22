import React, { FC } from "react"
import Contender from "../../assets/images/contentder__image.jpg"
import "./AppLayout.css"
import { Button } from "../AppButton/AppButton"
import { useNavigate } from "react-router-dom"

export const Header: FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <header className="header">
                <div className="headerLeft">
                    <img src={Contender} className="headerLeftImage" />
                    <p className="headerLeftText"><b>contentder</b></p>
                </div>
                <div className="headerRight">
                    <Button name="headerRightButton" text="LOGOUT" action={() => navigate("/userlogin")} />
                </div>
            </header>
        </>
    )

}
