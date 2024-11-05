const Message=(props)=>{
    return (
        <div>
           -------------------------------------------<br/>
             {props.content.id} {props.content.message}
           <br/>-------------------------------------------
        </div>
    )
}

export default Message;