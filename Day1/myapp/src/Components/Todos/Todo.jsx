 const Todo = (props) => {
    return (
        <div>
            <h3>{props.todo.title}</h3>
            <p>{props.todo.completed}</p>
        </div>
    )
}

export default  Todo;