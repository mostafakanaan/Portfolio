import React from 'react';
import Home from './components/Home';
import MyNavbar from './components/Utils/MyNavbar';



function App() {
  return (
    <div className="App">
      <MyNavbar/>
    <Home/>
    <div className="Home" id="work">
      My Projects
    </div>
    <div className="Home" id="about">
      About me
    </div>
    <div className="Home" id="contact">
      Contact form
    </div>
    </div>
    );
  }
  
  export default App;
  