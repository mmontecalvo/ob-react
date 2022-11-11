import React, { useState } from 'react';
import useList from '../hooks/useList';

function TaskList() {
    const tasks = useList();
    const [ newTask, setNewTask ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        tasks.push(newTask);
        setNewTask('')
    }

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    return (
        <div>
            <h1>Task List</h1>
            <form onSubmit={handleSubmit}>
                <input value={newTask} type="text" placeholder='New Task' onChange={handleInputChange}/>
                <button type="submit">Create Task</button>
            </form>
            <button type="button" onClick={() => tasks.clear()}>Clear List</button>
            <button type="button" onClick={() => tasks.order()}>Order</button>
            <button type="button" onClick={() => tasks.reverseOrder()}>Reverse Order</button>
            {
                tasks.isEmpty() ? (
                    <p>Task List is empty.</p>
                ) : (
                    <ul>
                        {
                            tasks.value.map((task, i) => (
                                <li key={i}>
                                    <input type="checkbox" onChange={() => tasks.remove(i)} checked={false} />
                                    {task}
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default TaskList
