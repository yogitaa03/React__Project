import React,{useState} from 'react'
import Contender from '../../../assets/images/contentder__image.jpg'
import './AppHeader.css'
import LoginForm from '../../../pages/LoginUsers/LoginUsers'
import Button from '../../../components/AppButton/AppButton'
function Header() {
    const[current, setcurent] = useState(false)

  return (
        <header className="header" id="header">
        <div className="header__left">
            <img src={Contender} className="header__left__image" />
            <p className="header__left__topic"><b>contentder</b></p>
        </div>
        <div className="header__right">
            <nav className="header__right__navigation">
                <div>Templates</div>
            </nav>
            <nav className="header__right__navigation">
                <div>Features</div>
            </nav>
            <nav className="header__right__navigation">
                <div>Subscription</div>
            </nav>
            <nav className="header__right__navigation">
                <div>Support</div>
            </nav>
            <Button name="header__right__button" text="LOGIN" action={()=> setcurent(true)}/>
            {current && <LoginForm action={()=>setcurent(false)} />}
        </div>
    </header>

  )
}

export default Header