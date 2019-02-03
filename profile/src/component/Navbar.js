import React, { Component } from 'react';
import '../static/css/navbar.css';

const styles = {
  container: {
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  navbarHeader: {
    justifyContent: 'flex-start',
  },
  navbarContent: {
    justifyContent: 'flex-end',
  },
  button: {
    // borderRadius: 2,
    // backgroundColor: '#e5dbff',
    height: 50,
  }

};

class Navbar extends Component {
  render() {
    return (
       <nav style={styles.container}> 
          <div style={styles.navbarHeader}>
            <button>Juheeuu</button>
          </div>
          <div style={styles.navbarContent}>
            <button styles={styles.button}>Intro</button>
            <button styles={styles.button}>Skill</button>
            <button styles={styles.button}>Portfolio</button>
          </div>
       </nav>
    );
  }
}

export default Navbar;
