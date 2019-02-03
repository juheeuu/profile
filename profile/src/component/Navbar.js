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
};

class Navbar extends Component {
  render() {
    return (
       <nav style={styles.container}> 
          <div style={styles.navbarHeader}>
            <button>Juheeuu</button>
          </div>
          <div style={styles.navbarContent}>
            <button>Intro</button>
            <button>Skill</button>
            <button>Portfolio</button>
          </div>
       </nav>
    );
  }
}

export default Navbar;
