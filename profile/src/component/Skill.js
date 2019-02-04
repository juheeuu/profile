import React, { Component } from 'react';
import pythonImg from '../static/img/python.png';
import javascriptImg from '../static/img/javascript.png';
import cImg from '../static/img/c.png';
import htmlImg from '../static/img/html.png';

import '../static/css/intro.css';

const style = {
    container: {
        backgroundColor: '#f1f3f5',
    },
    card: {
        backgroundColor: 'white',
        color: '#212529',
        margin: 10,
        fontSize: 40,
        height: 350,
        textAlign: 'center',
        paddingBottom: 30,
    },
    img: {
        height: 180,
        // width: 200,
    },
    cardTitle: {
        fontSize: 25,
        // marginTop: -20,
        backgroundColor: '#9775fa',
        borderRadius: 20,
        marginLeft: 20,
        marginRight: 20,
        color: 'white',
        paddingTop: 6,
        paddingBottom: 8,
        paddingLeft: 14,
        paddingRight: 14,
    },
    cardText: {
        fontSize: 18,
        marginTop: 12,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 14,
        paddingRight: 14,
    },
    javascriptImg: {
        height: 120,
        marginTop: 30,
        marginBottom: 30,
    },
    cImg: {
        height: 120,
        marginTop: 30,
        marginBottom: 30,
    },
    htmlImg: {
        height: 120,
        marginTop: 30,
        marginBottom: 30,
    },
    cardContainer: {
        flexDirection: 'row',
        textAlign: 'center',
        paddingTop: 70,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 85,
    },
    titleContainer: {
        paddingTop: 40,
        // paddingBottom: 40,
        textAlign: 'center',
    },
    mainText: {
        textAlign: 'center',
        fontSize: 60,
        color: '#9775fa',
        fontWeight: 'bold',
    },
};

class Skill extends Component {
  render() {
    return (
      <div className="introContainer" style={style.container}>
        <div style={style.titleContainer}> 
            <div style={style.mainText}> My Skills</div>
        </div>
        <div style={style.cardContainer}>
            <div style={style.card} className="card"> 
                <img src={pythonImg} style={style.img}></img>
                <div style={style.cardTitle}> Python </div>
                <div style={style.cardText}> Django </div>
                <div style={style.cardText}> Python 2,3 </div>
            </div>
            <div style={style.card} className="card"> 
                <img src={javascriptImg} style={style.javascriptImg}></img>
                <div style={style.cardTitle}> Javascript </div>
                <div style={style.cardText}> Node.js </div>
                <div style={style.cardText}> React </div>
                <div style={style.cardText}> React Native </div>
            </div>
            <div style={style.card} className="card"> 
                <img src={cImg} style={style.cImg}></img>
                <div style={style.cardTitle}> C/C++ </div>
                <div style={style.cardText}> System programming </div>
            </div>
            <div style={style.card} className="card"> 
                <img src={htmlImg} style={style.htmlImg}></img>
                <div style={style.cardTitle}> Html/CSS </div>
                <div style={style.cardText}> Bootstrap </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Skill;
