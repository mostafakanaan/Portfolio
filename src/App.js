import React, { Component } from 'react'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import MyNavbar from './components/Utils/MyNavbar'
import Container from 'react-bootstrap/Container'

export default class App extends Component {

	componentDidMount() {
		this.props.hideLoader();
	}

	render() {
		return (
				<div className="App">
					<MyNavbar />
					<Container fluid>
						<Home />
						<Projects />
						<About />
						<Contact />
					</Container>
				</div>
		);
	}
}