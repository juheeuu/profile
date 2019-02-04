import React, { Component } from 'react';

import '../static/css/intro.css';

const style = {
    container: {
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#9775fa',
        paddingTop: 70,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 85,
    },
    mainText: {
        textAlign: 'center',
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
    },
    subText: {
        marginTop: 20,
        color: 'white',
        letterSpacing: -0.3,
    },
    cardContainer:{
        // display: 'flex',
        // flexDirectio
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        marginTop: 32,
        marginLeft: 300,
        marginRight: 300,
        marginBottom: 32,
        shadowOffset: {width: 2, height: 2},
        paddingBottom: 5,
    },
    cardTitle: {
        fontSize: 32,
        textAlign: 'left',
        marginLeft: 20,
        paddingTop: 10,
        letterSpacing: -1.5,
        wordSpacing: -1,
        color: '#495057',
    },
    cardText: {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 3,
        textAlign: 'left',
        marginLeft: 120,
        color: '#495057',
    },
    cardContent: {
        marginTop: 12,
        paddingBottom: 5,
        backgroundColor: '#e9ecef',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 8,
        marginBottom: 20,
        paddingTop: 5,
    },
};

class Intro extends Component {
  render() {
    return (
      <div className="introContainer" style={style.container}>
      <div style={style.mainText}> About Me!</div>
      <div style={style.subText}>
       KAIST 16 Major CS Minor ISysE
      </div>
      <div style={style.cardContainer}>
        <div style={style.card}>
            <div style={style.cardTitle}> <a href="https://cs.kaist.ac.kr/"> Computer Science  </a></div>
            <ul style={style.cardContent}>
                <li style={style.cardText}> System Programming </li>
                <li style={style.cardText}> Computer Organization </li>
                <li style={style.cardText}> Programming Language </li>
                <li style={style.cardText}> Introduction to Computer Networks </li>
                <li style={style.cardText}> Introduction to Database </li>
                <li style={style.cardText}> Introduction to Algorithms </li>
                <li style={style.cardText}> Data Structure </li>
                <li style={style.cardText}> Discrete Mathematics </li>
            </ul>
        </div>
        <div style={style.card}>
            <div style={style.cardTitle}> <a href="https://ie.kaist.ac.kr/"> ISysE </a> </div>
            <ul style={style.cardContent}>
                <li style={style.cardText}> Manufacturing Process Innovation </li>
                <li style={style.cardText}> OR II-Stochastic Models </li>
                <li style={style.cardText}> Engineering Statistics </li>
                <li style={style.cardText}> Information Technology for IE </li>
            </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default Intro;
