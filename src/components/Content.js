import React from 'react'
import './Content.css';

export default function Content() {
	const img1={
		height:'350px',
		width:'500px',
		marginTop:'-250px',
		marginLeft:'55%',
		borderRadius:'10px'

	}
	const img2={
		height:'350px',
		width:'500px',
		marginLeft:'-100%',
		marginTop:'-250px',
		borderRadius:'10px'
	}
    return (
        <div>
			<div className='des'>
            <h2>What you can find here</h2>
		<p><li>Things which resembles your character, thinking.</li>
		   <li>Some of your past experiences and the way you reacted. </li>  
		   <li>About your relationships.</li>
		   <li>Who knows you might get to know about your hidden truths.</li>
		</p>
		<img src="/images/ppl.jpg" style={img1} alt="happy pic"/>

		</div>
		<div className='aud'>
        <h2>Reviews by users</h2>
		<p>
		<li>It helped me understand me better.</li>
		<li>Amazing! I was shocked to see that the results were so acurate.</li>
		<li>How?! I don't know how this website tells the exact truth.</li>
		<li>Damnnnnn! Shit's real.</li>
		</p>
		<img src="/images/laugh.jpg" style={img2} alt="happy pic"/>

		</div>
        </div>
    )
}
