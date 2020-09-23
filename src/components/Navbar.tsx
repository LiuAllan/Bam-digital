import React from 'react';
// Components
import logo from '../images/logo.svg';
import '../styles/StyledNavbar.scss';


const Navbar = () => {
	return (
		<div className='nav-container'>
			<img src={logo} alt='bam_logo' />
			<div className='nav-items'>
				<ul>
					<li><a href='#'>Services</a></li>
					<li><a href='#'>Approach</a></li>
					<li><a href='#'>Work</a></li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;