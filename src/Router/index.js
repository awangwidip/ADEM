import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Chatbot from '../Components/Chatbot';
import Schedule from '../Components/Schedule';
import Academic from '../Components/Academic';
import News from '../Components/News';
import Internship from '../Components/Internship';
import Scholarship from '../Components/Scholarship';
import LandingPage from '../Components/LandingPage';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><LandingPage /></Route>
				<Route exact path="/chatbot"><Chatbot /></Route>
				<Route exact path="/schedule"><Schedule /></Route>
				<Route exact path="/academic"><Academic /></Route>
				<Route exact path="/news"><News /></Route>
				<Route exact path="/internship"><Internship /></Route>
				<Route exact path="/scholarship"><Scholarship /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;