import React, { Component } from 'react';

const style = {
    container: {
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    mainText: {
        textAlign: 'center',
        fontSize: 60,
        color: 'white',
    },
    subText: {
        color: 'white',
    },
    img: {
    },
};

class Intro extends Component {
  render() {
    return (
      <div className="introContainer" style={style.container}>
        <div className="card"> 
            <div> Python </div>

        </div>
        <div> C </div>
        <div> Javascript </div>
      </div>
    );
  }
}

export default Intro;
