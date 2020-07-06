import React, {useState} from 'react'

export default function AddTask(props){

    const [task, setTask] = useState('')

    const onHandleSubmit = (e) => {
        e.preventDefault()
        props.addTask({task: task, status: false})
    }

    return(
        <form onSubmit={onHandleSubmit} className="container">
            <div className="row">
                <div className="col-12 col-lg-8 m-auto">
                    <div className="d-flex flex-row align-items-center justify-content-center p-5">
                        <label className="m-1">Task name : </label>
                        <input
                            className="m-1"
                            type="text" 
                            value={task}
                            onChange={ (e) => setTask(e.target.value)}
                            required
                        />
                        <button  className="m-1" type="submit">Add</button>  
                    </div>
                </div>
            </div>
        </form>
    )
}