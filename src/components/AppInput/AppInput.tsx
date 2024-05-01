import React, { FC } from "react"

interface InputProps{
    text: string
    holder?: string
    name: string
    inputValue?: string | number 
    input?: (e:any) => void
}

export const InputField: FC<InputProps> = (props) =>{
    return(

     <input type={props.text} placeholder={props.holder} className={props.name} value={props.inputValue} onChange={props.input} />

    )
}
