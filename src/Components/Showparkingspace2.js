import React from 'react'
import './Showparkingspace2.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Showparkingspace2 () {
	return (
		<div className='Showparkingspace2_Showparkingspace2'>
			<img className='_61' src = {ImgAsset.Showparkingspace1__61} />
			<span className='Destination'>Destination</span>
			<span className='FINDINGPARKINGLOTSMADEEASY'>FINDING PARKING LOTS MADE EASY</span>
			<Link to='/parkingplacei2'>
				<div className='Rectangle14'/>
			</Link>
			<Link to='/parkingplacek2'>
				<div className='Rectangle21'/>
			</Link>
			<div className='Rectangle24'/>
			<span className='Rajajinagar'>Rajajinagar</span>
			<div className='Rectangle25'/>
			<div className='Rectangle26'/>
			<img className='Line3' src = {ImgAsset.Showparkingspace2_Line3} />
			<img className='Line4' src = {ImgAsset.Showparkingspace2_Line4} />
			<img className='Line5' src = {ImgAsset.Showparkingspace2_Line5} />
			<img className='Line6' src = {ImgAsset.Showparkingspace2_Line6} />
			<img className='Line9' src = {ImgAsset.Showparkingspace2_Line9} />
			<img className='Line12' src = {ImgAsset.Showparkingspace2_Line12} />
			<span className='Kormangala'>Kormangala</span>
			<div className='Rectangle27'/>
			<img className='Line12_1' src = {ImgAsset.Showparkingspace2_Line12_1} />
			<img className='Line13' src = {ImgAsset.Showparkingspace2_Line13} />
			<span className='Parkingrid'>Parkingrid</span>
			<div className='Frame5'>
			</div>
			<Link to='/parkingplacej2'>
				<span className='Jayanagar'>Jayanagar</span>
			</Link>
			<Link to='/parkingplacer2'>
				<span className='Rajajinagar_1'>Rajajinagar</span>
			</Link>
			<Link to='/parkingplaces2'>
				<span className='Shivajinagar'>Shivajinagar</span>
			</Link>
			<span className='Indiranagar'>Indiranagar</span>
		</div>
	)
}