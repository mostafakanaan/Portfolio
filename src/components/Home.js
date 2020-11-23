import React from 'react';
import TypedText from './Utils/TypedText';


const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
class Home extends React.Component {
    render() {
        return(
            <div id="home" className='Home'>
            <img src="../favicon.ico" className="App-logo" alt="icon"/>
            <p>
            Still working on it, trying to come up with a nice design...<i class="fab fa-github-square"></i>
            </p> 
            <div>
            <span className='clickableIcon' onClick={() => {openInNewTab('https://facebook.com/SteveKanaan/')}}><i class="fab fa-facebook"></i></span>  
            <span className='clickableIcon' onClick={() => {openInNewTab('https://instagram.com/_dermusti/')}}><i class="fab fa-instagram"></i></span>
            <span className='clickableIcon' onClick={() => {openInNewTab('mailto:muus.kaan@hotmail.com')}}><i class="far fa-envelope"></i></span>
            </div>
            <div class="line"></div>
            
            <TypedText
            strings={[
                'software developer',
                'student at FH-Aachen',
                'freelancer',
                ''
            ]} text="My name is Mustafa Kanaan, I'm a "
            />

            </div>
            );
        }
    }
    
    export default Home;