import React from 'react';
// Components
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import OurMission from '../components/OurMission';
import OurServices from '../components/OurServices';
import OurApproach from '../components/OurApproach';
import OurWork from '../components/OurWork';
import OurClients from '../components/OurClients';
import Contact from '../components/Contact';

const landingPage = () => {

	return (
		<div>
			<Navbar />

			<Header />

			<OurMission />

			<OurServices />

			<OurApproach />

			<OurWork />

			<OurClients />

			<Contact />
		</div>
	);
}

export default landingPage;