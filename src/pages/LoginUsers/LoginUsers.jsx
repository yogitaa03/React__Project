import LoginImage from '../../assets/images/login__image.jpg'
import WrongImage from '../../assets/images/wrong__image.png'
import './LoginForm.css'
import InputField from '../../components/AppInput/AppInput'
import Button from '../../components/AppButton/AppButton'

let LoginForm=({closeLogin})=>
{

    return(
        
        <div className="form">
                <div className="login__form" >
                <img src={LoginImage} className="login__form__image"/>
                <img src={WrongImage} className="login__form__cross" id="login__cross" onClick={closeLogin}/>
                <div className="login__form__authentication">
                <InputField text='text' holder="Username" name="login__form__authentication__input"/>
                </div>
                <div className="login__form__authentication">
                <InputField text='text' holder="Password" name="login__form__authentication__input"  />
                </div>
                <Button name="login__button" text="Login" action={closeLogin}/>
            </div>
        </div>

    )
}

export default LoginForm