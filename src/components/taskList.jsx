import React from 'react'
import SingleTask from './singleTask'

export default function PostList(props){

    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    {props.data.map( (i, id) => (
                        console.log(i),
                        <SingleTask
                            key={id}
                            data={i}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}