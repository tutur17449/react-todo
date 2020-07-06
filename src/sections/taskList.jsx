import React from 'react'
import SingleTask from '../components/singleTask'

export default function PostList(props){

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    {props.data.map( (i, id) => (
                        <SingleTask
                            key={id}
                            data={i}
                            updateTask={props.updateTask}
                            deleteTask={props.deleteTask}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}