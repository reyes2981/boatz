import React from 'react'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import Vessel_list from './Vessel_list'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


export default function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Header />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
					<Route exact path='/rentals/new'>
						{/* <RentalForm /> */}
					</Route>
				</Switch>
			</Router>
			<Vessel_list />
		</div>
	)
}