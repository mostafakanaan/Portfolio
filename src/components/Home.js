import React from 'react';
import TypedText from './Utils/TypedText';


const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = { FBfade: false, Ifade: false, Efade: false }
      }
      
    render() {
        const FBfade = this.state.FBfade;
        const Ifade = this.state.Ifade;
        const Efade = this.state.Efade;

        return(
            <div id="home" className='Home'>
            <img src="../favicon.ico" className="App-logo" alt="icon"/>
            <p>
            Still working on it, trying to come up with a nice design...<i class="fab fa-github-square"></i>
            </p> 
            <div>
            <span onClick={() => this.setState({ FBfade: true })}
                onAnimationEnd={() => {this.setState({ FBfade: false }); openInNewTab('https://facebook.com/SteveKanaan/')}}
                className={FBfade ? 'clickableIcon fade' : 'clickableIcon'}
            >
                <i className={"fab fa-facebook " + this.state.fade}></i>
            </span>  
            <span onClick={() => this.setState({ Ifade: true })}
                onAnimationEnd={() => {this.setState({ Ifade: false });openInNewTab('https://instagram.com/_dermusti/')}}
                className={Ifade ? 'clickableIcon fade' : 'clickableIcon'}
            >
                <i className="fab fa-instagram"></i>
            </span>
            <span onClick={() => this.setState({ Efade: true })}
                onAnimationEnd={() => {this.setState({ Efade: false });openInNewTab('mailto:muus.kaan@hotmail.com')}}
                className={Efade ? 'clickableIcon fade' : 'clickableIcon'}
            >
                <i className="far fa-envelope"></i>
            </span>
            </div>
            <div className="line"></div>
            
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