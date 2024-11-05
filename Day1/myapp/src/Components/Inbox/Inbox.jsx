import Message from "./Message/Message";
import { useState } from 'react';

export function Inbox(){
    const [message, setMessage]=useState("");
    var [messages,setMessages]=useState([
        {id:1, message:"Hello, How are you?"},
        {id:2, message:"I am fine, thank you"},
        {id:3, message:"How can I help you?"}
    ]);
    // var messages=[
        
    // ];
    // var messages=null;
    const [count, setCount]=useState(0);


    var addMessage = ()=>{
        var newMessage = {id:messages.length+1, message:message};
        setMessages([...messages,newMessage]);
    }

    return(<div>
        <h1>Inbox</h1>
        <div>
            <input type="text" value={message} onChange={e=>setMessage(e.target.value)} placeholder="Type a message"/>
            <button onClick={addMessage}>Send</button>
        </div>
        <button onClick={()=>setCount(count+1)}>+</button>{count}
        {
           messages?
                messages.length>0?
                        messages.map((msg)=>{
                            return <Message key={msg.id} content={msg}/>
                        })
                    :
                        <h3>No messages</h3>
            :
                <h3>Loading...</h3>
        }
    </div>)
}