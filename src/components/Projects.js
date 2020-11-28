import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Project from './Utils/Project'

export default class Projects extends Component {
    render() {
        return (
            <div className="row Page" id="work">
                <Container>
                    <Row md={3}>
                        <Col><Project /></Col>
                        <Col><Project /></Col>
                        <Col><Project /></Col>
                    </Row>
                    <Row md={3}>
                        <Col><Project /></Col>
                        <Col><Project /></Col>
                        <Col><Project /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
