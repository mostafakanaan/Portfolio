import React, { Component } from 'react'
import TypedText from './Utils/TypedText'
import MyIcon from './Utils/MyIcon'
import { Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'

const goTo = (url) => {
    const newWindow = window.open(url, '_self', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

export default class Home extends Component {

    render() {

        return (
            <div id='home' className='Page'>
                <Row>
                    <Col>
                        <div id='introBox'>
                            <h1>Hi, I'm Mustafa</h1>
                            <TypedText
                                strings={[
                                    'software developer',
                                    'student at FH-Aachen',
                                    'freelancer',
                                    ''
                                ]} text="I'm a "
                            />
                            <Button id='aboutBtn' variant="light"
                                onClick={() => { goTo('#about') }}>Learn more <i className="fas fa-arrow-right"></i></Button>
                        </div>
                    </Col>
                    <Col id='letsTalkBox'>
                        <Button id='letsTalkBtn' variant="light"
                            onClick={() => { goTo('#contact') }}>Let's Talk!</Button>
                    </Col>
                </Row>


                <Row className='myfooter'>
                    <OverlayTrigger overlay={<Tooltip id='tooltip'>My Projects</Tooltip>}>
                        <span id='scrollBtn' onClick={() => { goTo('#work') }}>
                            <i className="fas fa-angle-double-down"></i>
                        </span>
                    </OverlayTrigger>

                    <MyIcon uri='https://facebook.com/SteveKanaan/' icon='fab fa-facebook' />
                    <MyIcon uri='https://instagram.com/_dermusti/' icon='fab fa-instagram' />
                    <MyIcon uri='https://twitter.com/mkanaan_de' icon='fab fa-twitter' />
                    <MyIcon uri='mailto:muus.kaan@hotmail.com' icon='far fa-envelope' />
                </Row>



            </div>
        );
    }
}