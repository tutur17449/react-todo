import React from 'react'

export default function SingleTask(props) {
    return (
        <div className="col-12 col-lg-8 m-auto">
            <div className="d-flex flex-row align-items-center justify-content-between p-5">
                <p className="m-1">{props.data.title} | {props.data.completed ? ("🟢") : ("🔴")}</p>
                <div className="d-flex flex-row">
                    <button className="btn btn-success m-1" onClick={() => props.updateTask(props.data)}>Update</button>
                    <button className="btn btn-danger m-1" onClick={() => props.deleteTask(props.data)}>Delete</button>
                </div>
            </div>
        </div>
    )
}