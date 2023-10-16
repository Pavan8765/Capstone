import React from 'react'
import './Home.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Home () {
	return (
		<div className='Home_Home'>
			<div className='Rectangle9'/>
			<span className='Parkingrid'>Parkingrid</span>
			<div className='Rectangle10'/>
			<Link to='/about'>
				<span className='About'>About</span>
			</Link>
			<Link to='/location'>
				<span className='Location'>Location</span>
			</Link>
			<Link to='/contactus'>
				<span className='ContactUs'>Contact Us</span>
			</Link>
			<img className='_51' src = {ImgAsset.Home__51} alt='not found'/>
			<img className='FindAmazingParkingspacesnearyou' src = {ImgAsset.Home_FindAmazingParkingspacesnearyou} alt='not found'/>
			<Link to='/maps'>
				<div className='Rectangle11'/>
			</Link>
			<span className='ShowParkingSpaces'>Show Parking Spaces</span>
			<div className='Rectangle12'/>
			<span className='Home_1'>Home </span>
		</div>
	)
}