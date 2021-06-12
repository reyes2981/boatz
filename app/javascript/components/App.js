import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


export default function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Header />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}