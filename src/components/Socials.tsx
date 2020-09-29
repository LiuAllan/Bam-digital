import React from 'react';
import '../styles/StyledSocials.scss';
//icons
import Instagram from '../images/icons/instagram.svg';
import Facebook from '../images/icons/facebook.svg';
import Linkedin from '../images/icons/linkedin.svg';

const Socials = () => {
	return (
		<div className='socials-container'>
			<a href='https://www.facebook.com/bamdigitalagency/'><img src={Facebook} alt='' className='fb'/></a>
			<a href='https://www.instagram.com/bamdigitalagency/'><img src={Instagram} alt=''className='insta'/></a>
			<a href='https://www.linkedin.com/company/bamdigitalagency/'><img src={Linkedin} alt='' className='linkedin'/></a>
		</div>
	);
}

export default Socials;