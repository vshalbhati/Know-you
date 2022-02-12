import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './Sign.css';


export default function Sign() {
    const dabStyle={
        marginTop:'15%'
    }
    const btnStyle={
        backgroundColor:'rgba(255,99,71,0.8)',
        marginLeft:'46%',
        marginTop:'5%',
    }
    const imgStyle={
        width:'100%',
        zIndex:'-1',
        height:'655px',
        marginTop:'-15%',
        position:'fixed'
    }
    const nameStyle={
        fontSize:'25px',
        marginLeft:'42%',
        width:'300px',
        border:'none',
        backgroundColor:'rgba(0,0,0,0)',
        borderBottom:'2px white solid',
        color:'white',
        outline:'none'
    }
    const textStyle={
        fontSize:'20px',
        marginLeft:'42%',
        width:'300px',
        border:'none',
        backgroundColor:'rgba(0,0,0,0)',
        borderBottom:'2px white solid',
        color:'white',
        marginTop:'50px',
        outline:'none'

    }
    const teStyle={
        marginLeft:'46%',
        marginTop:'2%',
        color:'white',
        fontSize:'20px',
        cursor:'pointer'
    }
    const handleclick=()=>{
        toast.error("This sevise isn't available at the moment",{
        position:'bottom-center',  
        autoClose: 3000,  
    }
        )}
    return (
        <div className='sign'>
            <img src='/images/signBg.png' style={imgStyle}/>
            <div className="dabba" style={dabStyle}>
                <div className="username">
                  <input type="username" style={nameStyle} name="username" id="username" placeholder=" Enter Your Username"/>
                </div> 

                <div className="password">
                 <input type="password" style={textStyle} name="password" id="password" placeholder=" Enter Your Password"/>
                </div>

                <input type="submit"  name="submit" id="submit" onClick={handleclick} value=" Log In"/>
                <div className="text" style={teStyle}>
                <h5>Forgot your password?</h5>
                <h5>Don't have an account?</h5>
                </div>
            </div>
            <ToastContainer />
            
        </div>
    )
}