import React, { useState }  from 'react'
import { Link } from 'react-router-dom'


const UpdateJob = props =>{
    const [title, setTitle] = useState(props.jobForUpdate.title);
    const [city, setCity] = useState(props.jobForUpdate.city);
    const [employer, setEmployer] = useState(props.jobForUpdate.employer);
    const [requirements, setRequirements] = useState(props.jobForUpdate.requirements);
    const [tasks, setTasks] = useState(props.jobForUpdate.tasks);

return (
        <div>
            <form onSubmit={props.submitChanges}
                data-id={props.jobForUpdate.id}
                data-title={title}
                data-city={city}
                data-employer={employer}
                data-requirements={requirements}
                data-tasks={tasks}>
                <input defaultValue={title} onChange={(e)=> setTitle(e.target.value)}/> 
                <input name="city" defaultValue={city} onChange={(e)=> setCity(e.target.value)}/> 
                <input name="employer" defaultValue={employer} onChange={(e)=> setEmployer(e.target.value)}/> 
                <textarea name="requirements" defaultValue={requirements} onChange={(e)=> setRequirements(e.target.value)}/> 
                <textarea name="tasks" defaultValue={tasks} onChange={(e)=> setTasks(e.target.value)}/> 
                <button type="submit" >Update</button >
            </form>
            </div>

    )
}


export default UpdateJob