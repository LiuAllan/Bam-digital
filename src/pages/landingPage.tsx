import React from 'react';
// Components
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import OurMission from '../components/OurMission';
import OurServices from '../components/OurServices';


const landingPage = () => {

	return (
		<div>
			<Navbar />

			<Header />

			<OurMission />

			<OurServices />

			<section className='our-approach'>
			</section>

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