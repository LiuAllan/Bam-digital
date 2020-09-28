import React from 'react';
// Components
import logo from '../images/logo.svg';
import '../styles/StyledNavbar.scss';
import Button from './Button';


const Navbar = () => {

	return (
		<div className='nav-container'>
			<img src={logo} alt='bam_logo' />
			<div className='nav-items'>
				<ul>
					<li><a href='#'>Services</a></li>
					<li><a href='#'>Approach</a></li>
					<li><a href='#'>Work</a></li>
					<Button buttonText={"Let's Talk"} buttonColor={'rgb(240, 72, 104)'} />
				</ul>
			</div>
		</div>
	);
}

export default Navbar;