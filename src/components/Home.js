import React, {Component} from 'react'
import TypedText from './Utils/TypedText'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class Home extends Component {

    render() {

        return (
            <div id='home' className='Page'>
                <Jumbotron fluid>
                    <img src={require('../img/mkanaan.png')} className='smallimg' alt='mkanaan' />

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