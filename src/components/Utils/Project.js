import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export default class Project extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={require('../../img/coming_soon.jpg')} />
                <Card.Body>
                    {/* <Card.Title className='dark-text'>Card Title</Card.Title>
                    <Card.Text className='dark-text'>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    <Button variant="dark" disabled>Code <i className="fas fa-code"></i></Button>
                    <br></br>
                    <Button variant="dark" disabled>Live Demo <i className="fas fa-link"></i></Button>
                </Card.Body>
            </Card>
        )
    }
}
