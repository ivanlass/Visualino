import React from 'react'
import ItemBig from '../Components/ItemBig'
import '../App.css';


const ReadView = (props) =>(
<div className="container">
<ItemBig jobs={props.jobs} chosenItem={props.match.params.id}/>

 </div>   
)


export default ReadView