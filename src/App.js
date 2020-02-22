import React from 'react';  
import './App.css';
import data from './data.json'
import Navigation from './Components/Navigation'
import Completed from './Components/Completed'
import history from './history'
import DeleteView from './Layout/DeleteView'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data, 
      jobForUpdate:{}, 
      completed:false, 
      modal:false
    };
  }


  pushJobPath = e => history.push(`/job/${e.currentTarget.dataset.id}`)

  closeModal = () => this.setState({modal:false})

  openModal = () =>  this.setState({modal:true})

  //find chosen job post and delete 
  deleteJob = e => {
    let oldList = this.state.data
    let newList = oldList.filter(job => job._id != e.currentTarget.dataset.id)
    this.setState({data:newList, completed:true, modal:false})
    history.push('/');
    setTimeout(() => {
      this.setState({completed: false})
    }, 2000)
  }


  //fetching job data and update particular job
  openUpdate = e => {
      this.setState({jobForUpdate:{
      id: e.currentTarget.dataset.id,
      title: e.currentTarget.dataset.title,
      city: e.currentTarget.dataset.city,
      employer:e.currentTarget.dataset.employer,
      requirements: e.currentTarget.dataset.requirements,
      tasks: e.currentTarget.dataset.tasks
    }})
      history.push(`/update/${e.currentTarget.dataset.id}`)
  }

  //submit changes in job list
  submitChanges = e => {    
    e.preventDefault()
    let dataCopy = this.state.data
    dataCopy.map(job =>{
      if (job._id === e.currentTarget.dataset.id ){
      job.title = e.currentTarget.dataset.title
      job.city = e.currentTarget.dataset.city
      job.employer = e.currentTarget.dataset.employer
      job.requirements = e.currentTarget.dataset.requirements
      job.tasks = e.currentTarget.dataset.tasks
      }
    })
     this.setState({data: dataCopy,completed:true})
     history.push(`/job/${e.currentTarget.dataset.id}`);
     setTimeout(() => {
      this.setState({completed: false})
    }, 2000)
}

  //fetch input values and store in job list
  createNewJob = e => {
    e.preventDefault()
    const newJob = {
      _id: toString(Date.now()),
      title: e.currentTarget.dataset.title,
      city: e.currentTarget.dataset.city,
      employer: e.currentTarget.dataset.employer,
      requirements: e.currentTarget.dataset.requirements,
      tasks: e.currentTarget.dataset.tasks
    }
    let jobList = this.state.data
    jobList.push(newJob)
    this.setState({data: jobList})
    history.push('/');
  }



  render() {
    return (
      <>

      {this.state.completed && <Completed />}
      <Navigation 
        pushJobPath={this.pushJobPath}
        openModal={this.openModal}
        deleteJob={this.deleteJob}
        jobForUpdate={this.state.jobForUpdate}
        data={this.state.data}
        openUpdate={this.openUpdate}
        submitChanges={this.submitChanges}
        createNewJob={this.createNewJob}/>

        {this.state.modal &&
          <DeleteView closeModal={this.closeModal} deleteJob={this.deleteJob} data={this.state.data}/>
        }
      </>
    );
  }
}

export default App;
