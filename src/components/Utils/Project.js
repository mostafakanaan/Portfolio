import React, { Component } from 'react'
import { Card} from 'react-bootstrap'

export default class Project extends Component {
    render() {
        return (
            <Card className="greyedout">
                <Card.Img variant="top" src={require('../../img/coming_soon.jpg')} />
                <Card.Body>
                    <Card.Title><h2 className='dark-text'>Projects</h2></Card.Title>
                    <Card.Text className='dark-text'>
                        <i className="fas fa-lock"></i>
                    </Card.Text>
                    {/* <Button variant="dark" disabled>Code <i className="fas fa-code"></i></Button>
                    <br></br>
                    <Button variant="dark" disabled>Live Demo <i className="fas fa-link"></i></Button> */}
                </Card.Body>
            </Card>
        )
    }
}
