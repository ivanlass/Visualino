import React from 'react'
import ItemSmall from '../Components/ItemSmall'
import '../App.css';

const DeleteView = props =>(
<>
<div className="modal-container" onClick={props.closeModal}>
</div>
       <div className="modal-inner">
       <div className="container">
              <ItemSmall deleteJob={props.deleteJob} item={props.data} delete={true}/>
       </div>
       </div>
       </>
)


export default DeleteView