import React from 'react'

export default function SingleTask(props) {

    return (
        <div className="w-100 d-flex flex-row align-items-center justify-content-between p-5">
            <p className="m-1">{props.data.title} | {props.data.completed ? ("🟢") : ("🔴")}</p>
            <div className="d-flex flex-row">
                <React.Fragment>
                    <button className="btn btn-success m-1" onClick={() => props.taskUpdate(props.data, {...props.data, completed: !props.data.completed})}>Update</button>
                    <button className="btn btn-danger m-1" onClick={() => props.taskDelete(props.data.id)}>Delete</button>
                </React.Fragment> 
            </div>
        </div>
    )
}