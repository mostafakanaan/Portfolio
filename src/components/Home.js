import React from 'react';
import TypedText from './Utils/TypedText';


class Home extends React.Component {
    render() {
        return(
            <div id="home" className='Home'>
            <img src="../favicon.ico" className="App-logo" alt="icon" />
            <p>
            Still working on it, trying to come up with a nice design...
            </p>
            <div class="line"></div>
            
            <TypedText
            strings={[
                'software developer',
                'student at FH-Aachen',
                'freelancer',
                ''
            ]} text='My name is Mustafa Kanaan, a '
            />

            </div>
            );
        }
    }
    
    export default Home;