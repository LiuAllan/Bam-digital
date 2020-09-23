import React from 'react';
// Components
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import OurMission from '../components/OurMission';

import '../styles/StyledOurServices.scss';

const landingPage = () => {

	return (
		<div>
			<Navbar />

			<Header />

			<OurMission />

			<section className='our-services'>
				<div className='our-services-head'>
					<h6>our services</h6>
					<h1>What we do best.</h1>
				</div>

				<div>
					Component here
				</div>
			</section>

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