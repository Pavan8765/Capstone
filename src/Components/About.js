import React from 'react'
import './About.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function About () {
	return (
		<div className='About_About'>
			<div className='Rectangle9'/>
			<span className='Parkingrid'>Parkingrid</span>
			<div className='Rectangle10'/>
			<Link to='/location'>
				<span className='Location'>Location</span>
			</Link>
			<Link to='/contactus'>
				<span className='ContactUs'>Contact Us</span>
			</Link>
			<div className='Rectangle12'/>
			<Link to='/'>
				<span className='Home'>Home </span>
			</Link>
			<span className='About_1'>About</span>
			<img className='_121' src = {ImgAsset.About__121} alt='not found'/>
			<span className='WelcometoParkingridAquickandeasiersolutiontoparkingproblems'>Welcome to Parkingrid<br/><br/>A quick and easier solution <br/>to parking problems</span>
			<span className='ParkingridisasimpleandefficientsolutiontotheprevailingparkingproblemsinmajormetropolitancitiesOurgoalistoreducepeoplestimeandeffortstofindaparkingspotsothattheycanspendmoretimeandenergyontheworktheyhadtodo'>Parkingrid is a simple and efficient <br/>solution to the prevailing parking<br/>problems in major metropolitan cities.<br/><br/>Our goal is to reduce people’s time and <br/>efforts to find a parking spot so that <br/>they can spend more time and energy <br/>on the work they had to do.</span>
			<img className='_112' src = {ImgAsset.About__112} alt='not found'/>
		</div>
	)
}