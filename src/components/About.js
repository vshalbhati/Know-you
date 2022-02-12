import React from 'react'

export default function About() {
    const wrapStyle={
        marginLeft:'20%',
        marginRight:'20%',
        marginTop:'8%',
        fontSize:'25px',
        fontFamily:'BankGothic Lt BT',
        paddingLeft:'20px',
        paddingRight:'20px',
        paddingBottom:'20px',
        color:'white'
    }
    const imgStyle={
        width:'100%',
        zIndex:'-1',
        height:'692px',
        position:'fixed',
        marginTop:'-9.9%',
    }
    return (
        <div>
            <img src='/images/contBg.jpg' style={imgStyle}/>
            <div className="wrapper" style={wrapStyle}>
            <h1>Hey There!</h1>
            <p>This is a practice website built on react framework with lots of grinding because it was my first project on react so i had to read many articles and watch a lot of youtube videos.</p>
            <p>As learning react was the main motive behind this project so there's not much you can do here, but i'm excited for the upcoming stuff.</p>
            <p>special thanx to the people who were there in my dark days.</p>
            </div>
        </div>
    )
}
