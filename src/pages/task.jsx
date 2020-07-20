import React, {useState, useEffect, useReducer} from 'react'
import TaskList from '../components/taskList'
import AddTask from '../components/addTask'
import taskReducer from '../reducers/task.reducer'
import {getTasks, addTask, updateTask, deleteTask} from '../actions/task.actions'

export default function Post(){

    const [state, dispatch] = useReducer(taskReducer, {tasks: [], error: null, isLoading: true})

    useEffect( () => {
        async function tasksList(){
            try {
                const response = await getTasks()
                dispatch({
                    type: "GET_TASKS",
                    playload: response
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

    const taskCreate = async (task) => {
        try {
            const response = await addTask(task)
            dispatch({
                type: "ADD_TASK",
                playload: response
            })
        } catch (error) {
            dispatch({
                type: "ERROR",
                playload: 'Can\'t create task'
            })
        }
    }

    const taskDelete = async (task) => {
        try {
            const response = await deleteTask(task)
            dispatch({
                type: "DELETE_TASK",
                playload: task
            })
        } catch (error) {
            dispatch({
                type: "ERROR",
                playload: 'Can\'t delete task'
            })
        }
    }

    const taskUpdate = async (oldTask, newTask) => {
        try {
            const response = await updateTask(newTask)
            dispatch({
                type: "UPDATE_TASK",
                playload: {
                    oldTask: oldTask,
                    newTask: response
                }
            })
        } catch (error) {
            dispatch({
                type: "ERROR",
                playload: 'Can\'t update task'
            })
        }
    }

    return(
        <React.Fragment>
            <h1 className="w-100 text-center">Tasks List</h1>
            {state.error !== null && <p>{state.error}</p>}
            <AddTask 
                taskCreate={taskCreate}
            />
            <TaskList 
                data={state.tasks}
                taskDelete={taskDelete}
                taskUpdate={taskUpdate}
            />
        </React.Fragment>
    )
}