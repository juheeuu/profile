import React, { Component } from 'react';
import profileImg from '../static/img/profileImg.png';

const style = {
    container: {
        flexDirection: 'column',
        textAlign: 'center',
        // marginTop: 60,
        paddingTop: 60,
        paddingBottom: 60,
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
