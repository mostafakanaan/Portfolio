import React, { Component } from 'react'
import { Row, Jumbotron} from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <div className="Page" id="about">
                <Jumbotron fluid>
                    <Row>
                        <img src={require('../img/mkanaan.png')} className='smallimg' alt='mkanaan' />
                    </Row>
                        <h4 className='dark-text'>Some Information About Me..</h4>
                    <div className="line"></div>
                </Jumbotron>
            </div>
        )
    }
}
