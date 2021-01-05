import React, { Component } from 'react'
import { CardDeck } from 'react-bootstrap'
import Project from './Utils/Project'
// import { Reveal, Tween } from 'react-gsap';


export default class Projects extends Component {
    render() {
        return (
            <div className="Page" id="work">
                <CardDeck>
                    <Project />
                    <Project />
                    <Project />
                </CardDeck>


                {/* <Reveal repeat>
                    <Tween from={{ opacity: 0 }} duration={2}>

                        <div className='test'>
                            <h2>Testing...</h2>
                        </div>
                    </Tween>
                </Reveal> */}

            </div>
        )
    }
}
