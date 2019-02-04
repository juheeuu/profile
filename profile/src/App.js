import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Skill from './component/Skill';
import Intro from './component/Intro';

const styles = {
  container: {
    backgroundColor: '#7048e8',
    flexDirection: 'column',
    justifyContent: 'center',
  }
};

class App extends Component {
  render() {
    return (
       <div style={styles.container}> 
         {/* <Navbar /> */}
         <Main />
         <Intro />
         <Skill />
       </div>

    );
  }
}

export default App;
