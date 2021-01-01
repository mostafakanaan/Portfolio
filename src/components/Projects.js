import React, { Component } from 'react'
import { CardDeck } from 'react-bootstrap'
import Project from './Utils/Project'
import { Reveal, Tween } from 'react-gsap';


export default class Projects extends Component {
    render() {
        return (
            <div className="Page" id="work">
                        <CardDeck>
                            <Project />
                            <Project />
                            <Project />
                        </CardDeck>
            </div>
        )
    }
}
