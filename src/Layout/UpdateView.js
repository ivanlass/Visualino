import React from 'react'
import ItemSmall from '../Components/ItemSmall'
import '../App.css';

const UpdateView = (props) =>(
       <div className="container">
              <ItemSmall  openUpdate={props.openUpdate} item={props.data} update={true}/>
       </div>   
)


export default UpdateView