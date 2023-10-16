import React from 'react'
import './Login.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Login () {
	return (
		<div className='Login_Login'>
			<span className='Username'>Username</span>
			<div className='Rectangle2'/>
			<div className='Rectangle4'/>
			<Link to='/'>
				<div className='Rectangle3'/>
			</Link>
			<span className='SignIn'>Sign In</span>
			<span className='Login_1'>Login</span>
			<span className='Rememberme'>Remember me</span>
			<div className='Frame2'>
				<div className='Border'>
					<img className='left' src = {ImgAsset.Login_left} alt='not found'/>
					<img className='right' src = {ImgAsset.Login_right} alt='not found'/>
					<img className='top' src = {ImgAsset.Login_top} alt='not found'/>
					<img className='bottom' src = {ImgAsset.Login_bottom} alt='not found'/>
				</div>
			</div>
			<Link to='/createanaccount'>
				<span className='Createanaccount'>Create an account</span>
			</Link>
			<div className='Parkingrid'>
				<span className='Parkingrid_1'>Parkingrid</span>
			</div>
			<img className='image1' src = {ImgAsset.Login_image1} alt='not found'/>
			<div className='Maskgroup'>
				<img className='imgbinsportscarlogocariK4Mj8gYX6WmzX2yqq6cDyjqfremovebgpreview1' src = {ImgAsset.Login_imgbinsportscarlogocariK4Mj8gYX6WmzX2yqq6cDyjqfremovebgpreview1} alt='not found'/>
				<div className='Rectangle1'/>
			</div>
			<img className='icons8password301' src = {ImgAsset.Login_icons8password301} alt='not found'/>
		</div>
	)
}