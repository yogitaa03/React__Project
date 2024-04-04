export const Button=(props)=>
{
    return(
        <>
        <button className={props.name} onClick={props.action} onSubmit={props.submit}>{props.text}</button>
        </>
    )
}