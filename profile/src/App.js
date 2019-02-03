import React, { Component } from 'react';
import profileImg from './profileImg.png';
import './App.css';
import Navbar from './component/Navbar';

const styles = {
  mainTitle: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  leftCategory: {
    flex: 0.2,
    backgroundColor: 'white',
    height: 100,
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#282c34',
  },
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
         <Navbar />
       </div>
    );
  }
}

export default App;
