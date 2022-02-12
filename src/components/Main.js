import React from 'react'
import Box from './Box';
import Content from './Content';
import Footer from './Footer';
import './Main.css';

function main() {
    const imgStyle={
        width:'100%',
        zIndex:'-1',
        height:'600px',
    }

    return (
        <div className='home'>
            <img src='/images/lyl.png' style={imgStyle}/>
            <Box/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default main
