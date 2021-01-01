import React, { Component } from 'react'
// import TypedText from './Utils/TypedText'
// import MyIcon from './Utils/MyIcon'
// import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Tween } from 'react-gsap';


// const goTo = (id) => {
//     // const newWindow = window.open(url, '_self', 'noopener,noreferrer')
//     // if (newWindow) newWindow.opener = null
//     document.getElementById(id).scrollIntoView(true, { behavior: 'smooth' })
// }

export default class Home extends Component {

    render() {

        return (
            <div className='Page' id='home'>
                <div className='WelcomeText'>
                    <Tween from={{ y: '-100vh' }} duration={2} ease="power1.out">

                        <h1>Welcome to my portfolio</h1>
                    </Tween>

                    <Tween from={{ y: '100vh' }} duration={2} ease="power1.out">
                        <h1>I'm still working on it...</h1>

                    </Tween>

                </div>
                {/* <div id='introBox'>
                    <h1>Hi, I'm Mustafa</h1>
                    <TypedText
                        strings={[
                            'student at FH-Aachen',
                            'software developer',
                            'freelancer',
                            ''
                        ]} text="&nbsp;&nbsp;a "
                    />

                    <h6> <a target='blank' href='https://www.eutech-scientific.de/'>EUtech Scientific Engineering</a>
                    </h6>

                    <Button id='aboutBtn' variant="light"
                        onClick={() => { goTo('about') }}>Learn more <i className="fas fa-arrow-right"></i></Button>

                    <br></br>

                    <Button id='letsTalkBtn' variant="light"
                        onClick={() => { goTo('contact') }}>Let's Talk!</Button>

                    <OverlayTrigger overlay={<Tooltip id='tooltip'>My Projects</Tooltip>}>
                        <span id='scrollBtn' onClick={() => { goTo('work') }}>
                            <i className="fas fa-angle-double-down"></i>
                        </span>
                    </OverlayTrigger>
                </div> */}


            </div>
        );
    }
}