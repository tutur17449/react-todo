import React, {useState} from 'react'
import TaskList from '../sections/taskList'
import AddTask from '../components/addTask'

export default function Post(){

    const [isAdding, setIsAdding] = useState(false)
    const [data, setData] = useState([
        {task: "Task 1", status: true},
        {task: "Task 2", status: true},
        {task: "Task 3", status: false},
    ])

    const addTask = (task) => {
        setData([...data, task])
        setIsAdding(false)
    }

    const deleteTask = (task) => {
        const taskData = [...data]
        taskData.splice(taskData.indexOf(task, 0), 1)
        setData(taskData)
    }

    const updateTask = (task) => {
        const taskData = [...data]
        taskData.splice(taskData.indexOf(task, 0), 1, {task: task.task, status: !task.status})
        setData(taskData)
    }

    const toggleIsAdding = () => {
        setIsAdding(!isAdding)
    }

    return(
        <React.Fragment>
            <h1 className="w-100 text-center">Task page</h1>
            <div className="w-100 text-center p-5">
                <button className="btn btn-info" onClick={toggleIsAdding}>{isAdding ? ("Return") : ("Add task")}</button>
            </div>
            {isAdding ? (
                <AddTask 
                    addTask={addTask}
                />
            ) : (
                <TaskList 
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                    data={data}
                />
            )}
            {(data.length === 0 && !isAdding) && <p className="p-5">No data ...</p>}
        </React.Fragment>
    )
}