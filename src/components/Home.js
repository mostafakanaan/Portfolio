import React, { Component } from 'react'
// import TypedText from './Utils/TypedText'
// import MyIcon from './Utils/MyIcon'
// import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Tween } from 'react-gsap';
import MyNavbar from './Utils/MyNavbar'

let lastScroll = 0;

// const goTo = (id) => {
//     // const newWindow = window.open(url, '_self', 'noopener,noreferrer')
//     // if (newWindow) newWindow.opener = null
//     document.getElementById(id).scrollIntoView(true, { behavior: 'smooth' })
// }

export default class Home extends Component {

    componentDidMount() {
        // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        // const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const nav = document.querySelector('nav');

        window.addEventListener('scroll', () => {

            if (document.scrollingElement.scrollTop < lastScroll)
                nav.classList.remove('fixed-nav');
            else if (nav.getBoundingClientRect().top <= 0)
                nav.classList.add('fixed-nav');


            lastScroll = document.scrollingElement.scrollTop;
        })


    }

    render() {

        return (
            <div className='Page' id='home'>
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                <div className='WelcomeText'>
                    <img src={require('../img/moon.png')} alt="" />

                    <Tween from={{ y: '-100vh' }} duration={2} ease="power1.out">

                        <h1>Welcome to my portfolio</h1>
                    </Tween>

                    <Tween from={{ y: '100vh' }} duration={2} ease="power1.out">
                        <h1>Still working on it . . .</h1>

                    </Tween>
                    <MyNavbar />

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