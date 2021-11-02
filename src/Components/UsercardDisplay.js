import React, { useState } from "react";
import TodolistDisplay from "./TodolistDisplay"
import Todobox from '../styles/Todobox.css'

function UsercardDisplay(props) {
    const user = props.userData
    const [showtodoinput, setShowTodoInput] = useState(false)

    function showinputtodo() {
        setShowTodoInput(true)
    }

    function addTodotoUser(e) {
        e.preventDefault();
        const user = props.userData
        const data = e.target.elements.newTodo.value
        const id = user.id
        const todo = { id, data }
        props.addTodoUser(todo)

    }

    return (
        <div className="justify-content-center" >
            {console.log(user.todo_list, user.id)}
            <div className="card mb-3 ">
                <img src={user.profileLink} alt={user.firstName} />
                <div className="card-body">
                    <h3><b>{user.firstName} {user.lastName}</b></h3>
                    <p>{user.userEmail}</p>
                    <p>{user.description}</p>
                    {(user.todo_list.length) === 0 ? <p>todo-list is empty</p> : <div>
                        <div className="todo-box">
                        <p><b>Your todo-list: </b></p>
                        <div >
                            {user.todo_list.map((todo, index) => <TodolistDisplay key={index} todo={todo} />)}
                        </div>
                        </div>
                    </div>
                    }

                    {showtodoinput ? <div><form onSubmit={addTodotoUser}><div className="cardaddtodo input-group mb-3"><input type="text" placeholder="Add todo" name="newTodo" className="p-1 mr-1" /><button type="submit" className="btn btn-success">Add</button></div></form></div> : <div></div>
                    }
                    <div >
                        <button className="btn btn-primary" onClick={showinputtodo}>Add todo-list</button>
                    </div>
                   
                </div>
            </div>
        </div >
    )
}

export default UsercardDisplay