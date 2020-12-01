import React, { Component } from 'react'
import MyIcon from './Utils/MyIcon'

export default class Contact extends Component {
    render() {
        return (
            <div className="Page" id="contact">
                <h2>Email me for now..</h2>
                <MyIcon uri='mailto:muus.kaan@hotmail.com' icon='far fa-envelope' />
            </div>
        )
    }
}
