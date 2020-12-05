import React, { Component } from 'react'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
// import MyNavbar from './components/Utils/MyNavbar'
import Container from 'react-bootstrap/Container'
//import smoothscroll from 'smoothscroll-polyfill';

export default class App extends Component {

	componentDidMount() {
		this.props.hideLoader();
	}

	render() {
		return (
			<div>
				{/* <MyNavbar /> */}
				<Container fluid className='App'>
					<Home />
					<Projects />
					<About />
					<Contact />
				</Container>
			</div>
		);
	}
}