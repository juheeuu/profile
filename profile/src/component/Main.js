import React, { Component } from 'react';
import profileImg from '../profileImg.png';

const style = {
    container: {
        flexDirection: 'column',
        textAlign: 'center',
    },
    mainText: {
        textAlign: 'center',
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
    },
    subText: {
        color: 'white',
    },
    img: {
    },
};

class Main extends Component {
  render() {
    return (
      <div className="mainContainer" style={style.container}>
        <div style={style.mainText}> Hello World! :)</div>
        <div style={style.subText}> <p> I'm a creative Web/App developer </p>  </div> 
        <img src={profileImg} style={style.img} />
      </div>
    );
  }
}

export default Main;
