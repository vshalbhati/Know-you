import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';




export default function Navbar() {
    return (
        <div className='Navbar'>
        <Link className='fancylink' to="./Vid">#</Link>
        <Link className='fancylink' to="./Main">Home</Link>
        <Link className='fancylink' to="./Contact">Contact</Link>
        <Link className='fancylink' to="./About">About </Link>
        <Link className='fancylink' to="./Sign">Sign In </Link>
        
        </div>
    )
}
