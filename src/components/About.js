import React, { Component } from 'react'
// import { Row, Jumbotron } from 'react-bootstrap';
import { Reveal, Tween } from 'react-gsap';

export default class About extends Component {
    render() {
        return (
            <div className="Page" id="about">
                <div className='WelcomeText'>
                    <Reveal repeat>
                        <Tween from={{ opacity: 0 }} duration={1.5}>
                            <img src={require('../img/mkanaan.png')} className='smallimg' alt='mkanaan' />
                        </Tween>
                    </Reveal>
                    <h2>My name is Mustafa Kanaan</h2>
                    <h2>Currently working at:</h2>
                    <h2><a target='_blank' rel='noopener noreferrer' href='https://www.eutech-scientific.de/'>EUtech Scientific Engineering</a></h2>
                </div>
                {/* <Jumbotron fluid>
                    <Row>
                        <img src={require('../img/mkanaan.png')} className='smallimg' alt='mkanaan' />
                    </Row>
                        <h4 className='dark-text'>Some Information About Me..</h4>
                    <div className="line"></div>
                </Jumbotron> */}
            </div>
        )
    }
}
