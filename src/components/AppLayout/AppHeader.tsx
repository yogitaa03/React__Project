import React, { FC } from "react"
import Contender from "../../assets/images/contentder__image.jpg"
import "./AppLayout.css"
import { Button } from "../AppButton/AppButton"
// import LoginForm from "../../pages/LoginUser/LoginUser"
import { useNavigate } from "react-router-dom"

export const Header: FC = () => {
    // const [isLogin, setIsLogin] = useState<boolean>(false)
    const navigate = useNavigate()

    return (
        <>
            <header className="header">
                <div className="headerLeft">
                    <img src={Contender} className="headerLeftImage" />
                    <p className="headerLeftText"><b>contentder</b></p>
                </div>
                <div className="headerRight">
                    {/* <nav className="headerRightNavigation">
                        <div>Templates</div>
                    </nav>                     <nav className="headerRightNavigation">
                        <div>Features</div>
                    </nav>
                    <nav className="headerRightNavigation">
                        <div>Subscription</div>
                    </nav>
                    <nav className="headerRightNavigation">
                        <div>Support</div>
                    </nav> */}
                    <Button name="headerRightButton" text="LOGOUT" action={() => navigate("/userlogin")} />
                    {/* {isLogin && <LoginForm closeLogin={() => setIsLogin(false)} />} */}
                </div>
            </header>
        </>
    )

}
