import React, { Component } from 'react'
import MyIcon from './Utils/MyIcon'

export default class Contact extends Component {
    render() {
        return (
            <div className="row Page" id="contact">
                Email me for now..
                <MyIcon uri='mailto:muus.kaan@hotmail.com' icon='far fa-envelope' />
            </div>
        )
    }
}
