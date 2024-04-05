import React, {FC} from "react"
import LoginImage from "../../assets/images/login__image.jpg"
import WrongImage from "../../assets/images/wrong__image.png"
import "./LoginUser.css"
import { Button } from "../../components/AppButton/AppButton"
import { InputField } from "../../components/AppInput/AppInput"


interface LoginFormProp{

    closeLogin: () => void
}

export const LoginForm: FC<LoginFormProp> = ({closeLogin}) =>{
    return(
                <div className="form">
                <div className="login" >
                <img src={LoginImage} className="loginImage"/>
                <img src={WrongImage} className="loginCross" onClick={closeLogin}/>
                <div className="loginAuthentication">
                <InputField text="text" holder="Username" name="loginAuthenticationInput"/>
                </div>
                <div className="loginAuthentication">
                <InputField text="text" holder="Password" name="loginAuthenticationInput"  />
                </div>
                <Button name="loginBtn" text="Login" action ={closeLogin}/>
            </div>    </div>

    )
}

