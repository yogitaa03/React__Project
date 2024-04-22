import React, { FC, useState } from "react"
import "./Login.css"
import { Button } from "../../components/AppButton/AppButton"
import { InputField } from "../../components/AppInput/AppInput"
import { useNavigate } from "react-router-dom"


interface LoginFormProp {

}

const LoginForm: FC<LoginFormProp> = ({ }) => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

    const handleLogin = () => {
        if (name === "" && password === "") {
            setNameError("Username is required*")
            setPasswordError("Password is required*")
        }
        else if (name === "") {
            setNameError("Username is required*")
            setPasswordError("")
        }
        else if (name === "null") {
            setNameError("Provide valid username*")
            setPasswordError("")
        }
        else if (password === "") {
            setPasswordError("Password is required*")
            setNameError("")
        }
        else if (password.length < 6 || password.length > 8) {
            setPasswordError("Password must be 6 to 8 characters*")
            setNameError("")
        }
        else {
            navigate("/user")
            setNameError("")
            setPasswordError("")
        }
    }

    return (
        <div className="login">
            <i className="fa fa-user-circle loginImage"></i>
            <div className="loginForm" >
                <div className="userName">
                    <label htmlFor="name" className="userNameLabel">User Name</label>
                    <InputField text="text" name="userNameInput" input={(e) => setName(e.target.value)} />
                    <div className="errorMsg">{nameError}</div>
                </div>
                <div className="password">
                    <label htmlFor="password" className="passwordLabel">Password</label>
                    <InputField text={isShowPassword ? "text" : "password"} name="passwordInput" input={(e) => setPassword(e.target.value)} />
                    <div className="errorMsg">{passwordError}</div>
                    <div className="checkPassword">
                        <div className="toShowPassword">
                            <InputField text="checkbox" name="showPassword" inputValue="Show Password" input={() => setIsShowPassword((prev) => !prev)} /> Show Password
                        </div>
                        <a href="" className="forgetPassword">Forget Password?</a>
                    </div>
                </div>
                <div className="formBtn">
                    <Button name="loginBtn" text="Login" action={handleLogin} />
                    <Button name="signinBtn" text="Sign In?" />

                </div>
            </div>
        </div>

    )
}
export default LoginForm
