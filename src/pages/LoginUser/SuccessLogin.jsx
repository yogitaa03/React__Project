import React from "react"
import Tick from "../../assets/images/tick__image.jpg"
import Wrong__image from "../../assets/images/wrong__image.png"
import "./LoginForm.css"

function SuccessLogin() {
  return (
    <div> <div class="login__success" id="login__success">
    <img src={Tick} class="login__success__image"/>
    <div class="login__success__message"><b>Successfully logged in. Now close this window</b></div>
    <img src={Wrong__image} class="login__success__cross" id="login__success__cross"
        />
</div>
</div>
  )
}

export default SuccessLogin