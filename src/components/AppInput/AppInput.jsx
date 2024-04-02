let InputField =(props)=>
{
    return (
        <>
        <input type={props.text} placeholder={props.holder} className={props.name} value={props.inputValue} onChange={props.input} />
        </>
    )
}

export default InputField;