import React from 'react';
import '../styles/StyledHeader.scss';

const Header = () => {
	return (
		<section className='header'>
			<div className='parallax'></div>

			<div className='header-text'>
				<h1>We are a results-driven studio, creating digital solutions for the real estate industry.</h1>
			</div>

			<div className='explore-design'>
				<h6>explore</h6>
				<span className='vertical-line'></span>
			</div>
		</section>
	);
}

export default Header;