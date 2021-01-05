import React from 'react';

export default class MyNavbar extends React.Component {
    render() {
        return (
            <nav>
                <div className='logo'><h1><a href='/'>M.Kanaan</a></h1></div>
                <ul>
                    <li><a href='#work'>Work</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        );
    }
}