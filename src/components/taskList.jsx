import React from 'react'
import SingleTask from './singleTask'

export default function PostList(props){

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    {props.data.map( (i, id) => (
                        <SingleTask
                            key={id}
                            data={i}
                            taskDelete={props.taskDelete}
                            taskUpdate={props.taskUpdate}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}