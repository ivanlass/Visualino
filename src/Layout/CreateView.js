import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const CreateView = props =>{
        const [title, setTitle] = useState("");
        const [city, setCity] = useState("");
        const [employer, setEmployer] = useState("");
        const [requirements, setRequirements] = useState("");
        const [tasks, setTasks] = useState("");

  return <div className="forms">
                <form onSubmit={props.createNewJob} 
                        data-title={title}
                        data-city={city}
                        data-employer={employer}
                        data-requirements={requirements}
                        data-tasks={tasks}>
                        <input placeholder="Title" onChange={(e)=> setTitle(e.target.value)}/>
                        <input placeholder="City" onChange={(e)=> setCity(e.target.value)}/>
                        <input placeholder="Employer" onChange={(e)=> setEmployer(e.target.value)}/>
                        <textarea placeholder="Requirements" onChange={(e)=> setRequirements(e.target.value)}/> 
                        <textarea placeholder="Tasks" onChange={(e)=> setTasks(e.target.value)}/> 
                        <button type="submit">Add new job</button>
                </form>
        </div>

}


export default CreateView