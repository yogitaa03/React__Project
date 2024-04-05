import React, { useState, FC } from "react"
import Contender from "../../../assets/images/contentder__image.jpg"
import "./AppHeader.css"
import { Button } from "../../../components/AppButton/AppButton"
import { LoginForm } from "../../../pages/LoginUser/LoginUser"

export const Header: FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false)

    return (
        <>
            <header className="header">
                <div className="headerLeft">
                    <img src={Contender} className="headerLeftImage" />
                    <p className="headerLeftText"><b>contentder</b></p>
                </div>
                <div className="headerRight">
                    <nav className="headerRightNavigation">
                        <div>Templates</div>
                    </nav>                     <nav className="headerRightNavigation">
                        <div>Features</div>
                    </nav>
                    <nav className="headerRightNavigation">
                        <div>Subscription</div>
                    </nav>
                    <nav className="headerRightNavigation">
                        <div>Support</div>
                    </nav>
                    <Button name="headerRightButton" text="LOGIN" action={() => setIsLogin(true)} />
                    {isLogin && <LoginForm closeLogin={() => setIsLogin(false)} />}
                </div>
            </header>
        </>
    )

}
