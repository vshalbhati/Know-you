import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
    const nmStyle={
        marginTop:'100px',
    }

    const nameStyle={
        fontSize:'25px',
        marginLeft:'330px',
        width:'600px',
        backgroundColor:'rgba(0,0,0,0.3)',
        color:'rgba(255,255,255,0.9)'

    }
    const textStyle={
        fontSize:'20px',
        marginLeft:'30%',
        paddingBottom:'150px',
        width:'600px',
        backgroundColor:'rgba(0,0,0,0.3)',
        paddingTop:'2px',
        color:'rgba(255,255,255,0.9)'

    }
    const buttonStyle={
        marginLeft:'44%',
        marginTop:'70px'
    }
    const imgStyle={
        width:'100%',
        zIndex:'-1',
        height:'712px',
        position:'fixed',
        marginTop:'-9.9%',
    }
    const handleclick=()=>{
        toast.success("message sent!",{
        position:'bottom-center',  
        autoClose: 3000,  
    }
        )}
    return (
        <div>
            <img src='/images/contBg.png' style={imgStyle}/>
            <div className="name" style={nmStyle}>
            <input type="username" style={nameStyle} name="username" id="username" placeholder=" Enter Your email"/>
            </div>
            <div>
            <input type="text" style={textStyle} name="text" id="text" placeholder=" Enter Your message"/>
            </div>
            <div className='content content--button'>
        <button type="button" style={buttonStyle} onClick={handleclick}  className="button btn"> send </button>
        </div>
            <ToastContainer />
        </div>
    )
}
