import React, {useState, useEffect, useReducer} from 'react'
import TaskList from '../components/taskList'
import AddTask from '../components/addTask'
import taskReducer from '../reducers/task.reducer'
import {getTasks, addTask, updateTask, deleteTask} from '../actions/task.actions'

export default function Post(){

    const [state, dispatch] = useReducer(taskReducer, {tasks: [], error: null, isLoading: true})
    const [isAdding, setIsAdding] = useState(false)

    useEffect( () => {
        async function tasksList(){
            try {
                const tasks = await getTasks()
                dispatch({
                    type: "GET_TASKS",
                    playload: tasks
                })
            } catch (error) {
                dispatch({
                    type: "ERROR",
                    playload: 'No data ...'
                })
            }
        }

        tasksList()
    }, [])

/*     const addTask = (task) => {
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
    } */

    const toggleIsAdding = () => {
        setIsAdding(!isAdding)
    }

    return(
        <React.Fragment>
            <h1 className="w-100 text-center">Task page</h1>
            <div className="w-100 text-center p-5">
                <button className="btn btn-info" onClick={toggleIsAdding}>{isAdding ? ("Return") : ("Add task")}</button>
            </div>
            {state.error !== null && <p>{state.error}</p>}
            <TaskList 
                data={state.tasks}
            />
        </React.Fragment>
    )
}