import React from 'react'
import './ContactUs.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function ContactUs () {
	return (
		<div className='ContactUs_ContactUs'>
			<div className='Rectangle9'/>
			<span className='Parkingrid'>Parkingrid</span>
			<div className='Rectangle10'/>
			<Link to='/location'>
				<span className='Location'>Location</span>
			</Link>
			<Link to='/'>
				<span className='Home'>Home </span>
			</Link>
			<Link to='/about'>
				<span className='About'>About</span>
			</Link>
			<div className='Rectangle12'/>
			<img className='icons8address5021' src = {ImgAsset.ContactUs_icons8address5021} alt='not found'/>
			<span className='GetinTouch'>Get in Touch</span>
			<span className='_115ENTERPRISECOURTGREENWOODSC29649'>115 ENTERPRISE COURT, <br/>GREENWOOD SC 29649</span>
			<img className='icons8phone501' src = {ImgAsset.ContactUs_icons8phone501} alt='not found'/>
			<span className='_5555551234'>(555) 555-1234.</span>
			<img className='icons8email501' src = {ImgAsset.ContactUs_icons8email501} alt='not found'/>
			<span className='moonlapseyahoocom'>moonlapse@yahoo.com</span>
			<div className='Rectangle15'/>
			<span className='MessageUs'>Message Us</span>
			<div className='Rectangle16'/>
			<div className='Rectangle17'/>
			<span className='FirstName'>First Name</span>
			<span className='LastName'>Last Name</span>
			<span className='Name'>Name</span>
			<span className='Email'>Email</span>
			<div className='Rectangle18'/>
			<span className='Comments'>Comments</span>
			<div className='Rectangle19'/>
			<span className='Ifyouhaveanyotherqueriesyoucanmailtouswithyourqueriesandwewouldrespondtothequeriesasquickaspossible'>If you have any other queries you<br/>can mail to us with your queries <br/>and we would respond to the <br/>queries as quick as possible </span>
			<div className='Rectangle20'/>
			<span className='Submit'>Submit</span>
			<span className='ContactUs_1'>Contact Us</span>
		</div>
	)
}