import React from 'react'
import './Createanaccount.css'
import {Link} from 'react-router-dom'
export default function Createanaccount () {
	return (
		<div className='Createanaccount_Createanaccount'>
			<span className='Createanaccount_1'>Create an account</span>
			<span className='Name'>Name</span>
			<span className='Emailid'>Email-id</span>
			<div className='Rectangle4'/>
			<div className='Rectangle5'/>
			<div className='Rectangle6'/>
			<Link to='/login'>
				<div className='Rectangle7'/>
			</Link>
			<span className='SignUp'>Sign Up</span>
			<span className='ReenterPassword'>Re-enter Password</span>
			<div className='Rectangle8'/>
		</div>
	)
}