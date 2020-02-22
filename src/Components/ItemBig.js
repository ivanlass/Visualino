import React from 'react'


const ItemBig = (props) =>(
    
    props.jobs.map(job=>(
        props.chosenItem === job._id && 
        <div className="info-container" key={job._id}>
        <div className="info-text">
            <span className="label-big">Title</span>
            <p className="title-big">{job.title}</p>
        </div>

        <div className="info-text">
            <span className="label-big">City</span>
            <p className="title-big">{job.city}</p>
        </div>

        <div className="info-text">
            <span className="label-big">Employer</span>
            <p className="title-big">{job.employer}</p>
        </div>

        <div className="info-text">
            <span className="label-big">Requirements</span>
            <p className="title-big">{job.requirements}</p>
        </div>

        <div className="info-text">
            <span className="label-big">Tasks</span>
            <p className="title-big">{job.tasks}</p>
        </div>
    </div>
    ))
)


export default ItemBig