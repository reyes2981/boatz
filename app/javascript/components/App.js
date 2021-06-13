import React, { Component } from 'react'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import BoatzContainer from './BoatzContainer'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'




export default class App extends Component {
  state = {
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {},
    owner: ''
}

componentDidMount() {
    this.checkLoginStatus()
}
checkLoginStatus = () => {
    axios.get('http://localhost:3000/logged_in', { withCredentials: true })
        .then(response => {
            if (response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
                this.setState({ loggedInStatus: 'LOGGED_IN', user: response.data.user, owner: response.data.owner })
            } else if (!response.data.logged_in && this.state.loggedInStatus === 'LOGGED_IN') {
                this.setState({ loggedInStatus: 'NOT_LOGGED_IN', user: {} })
            }
        })
        .catch(err => console.log(err))
}
handleLogin = (data) => {
    this.setState({ loggedInStatus: "LOGGED_IN", user: data.user, owner: data.owner })
}
handleLogout = () => {
    this.setState({ loggedInStatus: 'NOT_LOGGED_IN', user: {} })
}
  render() {
    return (
      <div>
			<Router>
				<Switch>
					<Route exact path='/' render={props => (
            <Header {...props}
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              loggedInStatus={this.loggedInStatus}
              isOwner={this.state.owner}
            />
          )}>
						
					</Route>
					<Route exact path='/login' render={props => (
            <Login {...props}
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              loggedInStatus={this.loggedInStatus}
              isOwner={this.state.owner}
            />

          )}>
						
					</Route>
					<Route exact path='/signup' render={props => (
            <Signup {...props} 
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              loggedInStatus={this.loggedInStatus}
              isOwner={this.state.owner}
            />
          )}>
						
					</Route>
          <Route exact path='/boatz' render={props => (
            <BoatzContainer {...props} 
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
              loggedInStatus={this.loggedInStatus}
              isOwner={this.state.owner}
              user={this.state.user}
            />
          )}>
						
					</Route>
					<Route exact path='/rentals/new'>
						{/* <RentalForm /> */}
					</Route>
				</Switch>
			</Router>
		</div>
    )
  }
}
