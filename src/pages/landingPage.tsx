import React from 'react';
// Components
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import OurMission from '../components/OurMission';
import OurServices from '../components/OurServices';
import OurApproach from '../components/OurApproach';

const landingPage = () => {

	return (
		<div>
			<Navbar />

			<Header />

			<OurMission />

			<OurServices />

			<OurApproach />

			<section className='our-work'>
			</section>

			<section className='our-clients'>
			</section>

			<section className='contact'>
			</section>
		</div>
	);
}

export default landingPage;