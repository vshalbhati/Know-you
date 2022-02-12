import React from 'react';
import './vid.css';


export default function Vid() {
  return( 
        <div>
            <div className="section">
                <h6>Let's dive In</h6>
                <div className='video-container'>
                    <div className='color-overlay'></div>
                    <video autoPlay loop muted>
                    <source  src='/images/frontBg.mp4' type='video/mp4'/>
                    </video>
                </div>
            </div>
            
        </div>
  )}
