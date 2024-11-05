import { useState } from 'react';
import Todo from "./Todo";

export default function Todos(){
    const [todo,setTodo]=useState([]);
    const getData=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json(),err=>console.log(err))
        .then(data=>setTodo(data));
    }
    return(<div>
        <h1>Todos</h1>
        <button onClick={getData}>Get Data</button>
        {
            todo.length>0?
                todo.map((t)=>{
                    return <Todo key={t.id} todo={t}/>
                })
            :
                <h3>No todos</h3>
        }
        </div>)
}