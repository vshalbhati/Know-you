import React, {useState} from 'react';
import './Box.css';

export default function Box(props) {
    const handleclick=()=>{
        console.log("button was clicked "+text);
        setText(text); 
        setmyStyle({
            color:'black',
            height:'200px'
    })
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [myStyle, setmyStyle] = useState({
        color:'rgba(255,255,255,0)',
        height:'0px'
    });
    const btnstyle={
        marginTop:'-70px',
        marginLeft:'-90px'
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="box">
        <input type="text" value={text} onChange={handleOnChange} className="name" placeholder="type your first name"></input>
        <div className='content content--button' style={btnstyle}>
        <button type="button"  onClick={handleclick}  className="button btn"> Reveal </button>
        </div>
        </div>
        <div className="container" style={myStyle}>
        <h2>Hii {text}</h2>
        <li>Your name has {text.length} alphabets, which is {[text.length]<5?"quite unique.":[text.length]<7?"quite common.":"pretty long."}</li>
        <li>Your gender is {text[text.length-1]==="a"?"female.":text[text.length-1]==="i"?"female.":"male."}</li>
        <li>As your name suggests, {text} you are {[text.length]<6?" unique and good looking.":text[text.length-1]==="i"?"beautiful and smart.":"smart and charming."}</li>
        <li>{text}, you are {[text.length]<5?"practical and you take help of your brain in most of the situations.":text[text.length-1]==="a"?"childish sometimes but you act mature in most of the situations.":"emotional and you think from your heart in many situations."}</li>
        <li>You {[text.length]<6?"take care of your loved ones quite well.":"are a bit possessive when it comes to your relationships."}</li>
        <li>You {[text.length]<7?"are funny and peaceful.":text[text.length-1]==="a"?"can be quite boring sometimes.":"are funny when your mood says so."}</li>
        <li>{[text.length]<7?"Your mood defines your energy and personality most of the times.":"You have a rockstrong personality, mood has to do nothing with your energy."}</li>
        <li>{text[text.length-1]==="a"?"You have beautiful eyes.":text[text.length-1]==="a"?"You have a good heart.":"You are stronger than you think!"}</li>
    </div>

    </>    
    )
}
