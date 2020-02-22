import React from 'react'
import {Router, Switch,Route,Link} from "react-router-dom";
import '../App.css';
import history from '../history'

import IndexView from '../Layout/IndexView'
import CreateView from '../Layout/CreateView'
import UpdateView from '../Layout/UpdateView'
import ReadView from '../Layout/ReadView'
import UpdateJob from '../Layout/UpdateJob'




class Navigation extends React.Component{
  render(){
    return(
<Router history={history}>
      <div>
        <nav>
          <ul className="navigation">
            <li>
              <Link to="/" className="nav-links">Index</Link>
            </li>
            <li>
              <Link to="/create" className="nav-links">Create</Link>
            </li>
            <li>
              <Link to="/update" className="nav-links">Update</Link>
            </li>
            <li>
              <a onClick={this.props.openModal} className="nav-links">Delete</a>
            </li>
          </ul>
        </nav>

        <Switch>

          <Route path="/create">
            <CreateView createNewJob={this.props.createNewJob}/>
          </Route>
          <Route exact path="/update">
            <UpdateView openUpdate={this.props.openUpdate} jobForUpdate={this.props.jobForUpdate} data={this.props.data}/>
          </Route>
          <Route exact path="/">
            <IndexView pushJobPath={this.props.pushJobPath} data={this.props.data}/>
          </Route>
          <Route path="/job/:id" render={props => (
              <ReadView {...props}  jobs={this.props.data}/>
            )} />
          <Route path="/update/:id" render={props => (
              <UpdateJob jobForUpdate={this.props.jobForUpdate} submitChanges={this.props.submitChanges} {...props} jobs={this.props.data}/>
            )} />
        </Switch>
      </div>
    </Router>
    )
  }
    

}


export default Navigation