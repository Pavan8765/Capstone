import React from 'react'
import './Showparkingspace1.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Showparkingspace1 () {
	return (
		<div className='Showparkingspace1_Showparkingspace1'>
			<img className='_61' src = {ImgAsset.Showparkingspace1__61} />
			<span className='Parkingrid'>Parkingrid</span>
			<span className='FINDINGPARKINGLOTSMADEEASY'>FINDING PARKING LOTS MADE EASY</span>
			<span className='Destination'>Destination</span>
			<div className='Rectangle14'/>
			<Link to='/showparkingspace2'>
				<img className='Line1' src = {ImgAsset.Showparkingspace1_Line1} />
			</Link>
			<Link to='/showparkingspace2'>
				<img className='Line2' src = {ImgAsset.Showparkingspace1_Line2} />
			</Link>
		</div>
	)
}