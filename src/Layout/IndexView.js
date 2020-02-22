import React from 'react'
import '../App.css';

import ItemSmall from '../Components/ItemSmall'


const IndexView = props =>(
        <div className="container">
                <ItemSmall pushJobPath={props.pushJobPath} item={props.data} />
        </div>
)


export default IndexView