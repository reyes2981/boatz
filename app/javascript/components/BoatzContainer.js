import React, { Component } from 'react'
import axios from 'axios'
import VesselList from './VesselList'
import NewVesselForm from'./forms/NewVesselForm'

export default class BoatzContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vessels: []
    }
    axios.get(`http://localhost:3000/owners/${props.user.id}/vessels.json`)
    .then(response => {
      this.handleVesselUpdate(response.data)
    })
  }
  
  
  handleVesselUpdate = (boat) => {
    this.setState((state) => ({
      vessels: [...state.vessels, boat]
    }))
  }
  render() {
    const {user} = this.props;
    return (
      <div>
       {user.email}
      <VesselList vessels={this.state.vessels}
                    handleVesselUpdate={this.handleVesselUpdate}/>
       <NewVesselForm user={user}
                      vessels={this.state.vessels}
                      handleVesselUpdate={this.handleVesselUpdate}/>
      </div>
    )
  }
}

