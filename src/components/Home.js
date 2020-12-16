import React, { Component } from 'react'
import TypedText from './Utils/TypedText'
import MyIcon from './Utils/MyIcon'
import { Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'

const goTo = (id) => {
    // const newWindow = window.open(url, '_self', 'noopener,noreferrer')
    // if (newWindow) newWindow.opener = null
    document.getElementById(id).scrollIntoView(true, { behavior: 'smooth' })
}

export default class Home extends Component {

    render() {

        return (
            <div id='home' className='Page'>
                <Row id='homeBody'>
                    <Col md="auto">
                        <div id='introBox'>
                            <h1>Hi, I'm Mustafa</h1>
                            <TypedText
                                strings={[
                                    'student at FH-Aachen',
                                    'software developer',
                                    'freelancer',
                                    ''
                                ]} text="a "
                            />

                            <h6>Currently working
                        @ <a target='blank' href='https://www.eutech-scientific.de/'>EUtech Scientific Engineering</a>
                            </h6>
                            <Button id='aboutBtn' variant="light"
                                onClick={() => { goTo('about') }}>Learn more <i className="fas fa-arrow-right"></i></Button>
                        </div>
                    </Col>
                    <Col xs lg="2" id='letsTalkBox'>
                        <Button id='letsTalkBtn' variant="light"
                            onClick={() => { goTo('contact') }}>Let's Talk!</Button>
                    </Col>
                </Row>
                <Row id='homeFooter'>
                    <OverlayTrigger overlay={<Tooltip id='tooltip'>My Projects</Tooltip>}>
                        <span id='scrollBtn' onClick={() => { goTo('work') }}>
                            <i className="fas fa-angle-double-down"></i>
                        </span>
                    </OverlayTrigger>
                    <div id='socialmedia' >
                        <MyIcon uri='https://facebook.com/SteveKanaan/' icon='fab fa-facebook' />
                        <MyIcon uri='https://instagram.com/_dermusti/' icon='fab fa-instagram' />
                        <MyIcon uri='https://twitter.com/mkanaan_de' icon='fab fa-twitter' />
                        <MyIcon uri='https://github.com/mostafakanaan' icon='fab fa-github' />
                    </div>
                </Row>
            </div>
        );
    }
}