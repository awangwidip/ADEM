import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/Chatbot'><div>Chatbot</div></Link>
		<Link to='/Schedule'><div>Schedule</div></Link>
		<Link to='/Academic'><div>Academic</div></Link>
		<Link to='/News'><div>News</div></Link>
		<Link to='/Internship'><div>Internship</div></Link>
		<Link to='/Scholarship'><div>Scholarship</div></Link>
		<Link to='/LandingPage'><div>LandingPage</div></Link>
	</div>
	)
}