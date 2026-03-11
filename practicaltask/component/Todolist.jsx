import React , { useState } from "react";

const Todolist = () => {
const [todos, setTodos] = React.useState([]);
const addTodo = () => {
    const newtodo = {
        id: Date.now(),
        text: 'new task'
    };
setTodos(prevtodo => {
    console.log(prevtodo);
return [...prevtodo, newtodo];

}
)    
};
return (
<div>
    <h2>Add Task</h2>
    <button onClick={addTodo}>Add task</button>
</div>
);
};
export default Todolist;