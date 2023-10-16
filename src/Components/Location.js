import React from 'react'
import './Location.css'
// import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Location () {
	return (
		<div className='Location_Location'>
			<div className='Rectangle9'/>
			<span className='Parkingrid'>Parkingrid</span>
			<div className='Rectangle10'/>
			<Link to='/'>
				<span className='Home'>Home </span>
			</Link>
			<Link to='/about'>
				<span className='About'>About</span>
			</Link>
			<div className='Rectangle12'/>
			<Link to='/contactus'>
				<span className='ContactUs'>Contact Us</span>
			</Link>
 			<span className='Location_1'>Location</span>
			 <img src = "https://maps.googleapis.com/maps/api/staticmap?center=Bangalore,CA&zoom=12&size=640x435&scale=2&markers=color:purple|label:A|Indiranagar,Bangalore&markers=color:purple|label:B|Kormangala,Bangalore&markers=color:purple|label:C|Jayanagar,Bangalore&markers=color:purple|label:D|Rajajinagar,Bangalore&markers=color:purple|label:E|Shivajinagar,Bangalore&maptype=roadmap&key=AIzaSyAEwkbOsOHxbpTGBVoC5qj0G0NGod5zQhI" alt='not found'></img>
 			{/* <img className='bangaloredistrictmap1' src = {ImgAsset.Location_bangaloredistrictmap1} />
 			<img className='icons8address5023' src = {ImgAsset.ContactUs_icons8address5021} />
 			<img className='icons8address5024' src = {ImgAsset.ContactUs_icons8address5021} />
 			<img className='icons8address5025' src = {ImgAsset.ContactUs_icons8address5021} />
 			<img className='icons8address5026' src = {ImgAsset.ContactUs_icons8address5021} />
 			<img className='icons8address5027' src = {ImgAsset.ContactUs_icons8address5021} />
 			<img className='icons8address5028' src = {ImgAsset.ContactUs_icons8address5021} />
 			<img className='icons8address5029' src = {ImgAsset.ContactUs_icons8address5021} />
 			<div className='Frame3'>
 				<img className='icons8address50211' src = {ImgAsset.ContactUs_icons8address5021} />
 			</div>
 			<img className='icons8address50210' src = {ImgAsset.ContactUs_icons8address5021} />
 			<img className='icons8address5022' src = {ImgAsset.ContactUs_icons8address5021} /> */}
		</div>
	)
}