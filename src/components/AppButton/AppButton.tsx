import React,{FC} from "react"

interface ButtonProps{
    name: string
    text: string
    action?: () => void | boolean
    submit?: () => void
}

export const Button: FC <ButtonProps> = (props) =>{
    return(

        <>
         <button className={props.name} onClick={props.action} onSubmit={props.submit}>{props.text}</button>
         </>

    )
}
