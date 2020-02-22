import React from 'react'
import '../App.css';


const ItemSmall = (props) =>(

  props.item.map(item=>(
  <table key={item._id}>
    <tbody>
      <tr>
        <td >
          <a className="pointer" onClick={props.pushJobPath} data-id={item._id}>
            <span className="d-block label">Title</span><span  className="title">{item.title}</span>
          </a>
        </td>
        <td><span className="d-block label">City</span><span className="title">{item.city}</span></td>
        <td><span className="d-block label">Employer</span><span className="title">{item.employer}</span></td>
      </tr>
<td></td>

      {props.update && 
          <div className="center">
                <button 
                  data-id={item._id}
                  data-title={item.title}
                  data-city={item.city}
                  data-employer={item.employer}
                  data-requirements={item.requirements}
                  data-tasks={item.tasks}
                  onClick={props.openUpdate}>
                    <a>Update</a>
                </button>
          </div>}

        {props.delete && 
          <div className="center">
              <button 
                data-id={item._id}
                onClick={props.deleteJob}>
                  <a >Delete</a>
              </button>
          </div>}

        </tbody>
     </table>

    )
  )  
)


export default ItemSmall