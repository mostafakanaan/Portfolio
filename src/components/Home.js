import React, {Component} from 'react'
import TypedText from './Utils/TypedText'
import Jumbotron from 'react-bootstrap/Jumbotron'
import MyIcon from './Utils/MyIcon'
import { Row } from 'react-bootstrap';

export default class Home extends Component {

    render() {

        return (
            <div id='home' className='Page'>
                <Jumbotron fluid>
                    <Row>
                    <img src={require('../img/mkanaan.png')} className='smallimg' alt='mkanaan' />
                    </Row>
                    <Row className='justify-content-center dark-text'>
                        <MyIcon uri='https://facebook.com/SteveKanaan/' icon='fab fa-facebook' />
                        <MyIcon uri='https://instagram.com/_dermusti/' icon='fab fa-instagram' />
                        <MyIcon uri='mailto:muus.kaan@hotmail.com' icon='far fa-envelope' />
                    </Row>
                    <div className="line"></div>

                    <TypedText
                        strings={[
                            'software developer',
                            'student at FH-Aachen',
                            'freelancer',
                            ''
                        ]} text="My name is Mustafa Kanaan, I'm a "
                    />
                </Jumbotron>
            </div>
        );
    }
}