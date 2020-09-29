import React, { useEffect } from 'react';
// Components
import logo from '../images/logo.svg';
import '../styles/StyledNavbar.scss';
import Button from './Button';

import CheckScrolled from './checkScrolled';

const Navbar = () => {

	const isScrolled = CheckScrolled();

	return (
		<div className='nav-container'>
			<img src={logo} alt='bam_logo' className={isScrolled ? 'fadeHide' : 'fadeShow'} />
			<div className='nav-items'>
				<ul>
					<li className={isScrolled ? 'fadeHide' : 'fadeShow'}><a href='#our-services-id'>Services</a></li>
					<li className={isScrolled ? 'fadeHide' : 'fadeShow'}><a href='#our-approach-id'>Approach</a></li>
					<li className={isScrolled ? 'fadeHide' : 'fadeShow'}><a href='#our-work-id'>Work</a></li>
					<Button buttonText={"Let's Talk"} buttonColor={'rgb(240, 72, 104)'} />
				</ul>
			</div>
		</div>
	);
}

export default Navbar;