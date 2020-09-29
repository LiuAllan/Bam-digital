import React from 'react';
// Styles
import '../styles/StyledOurApproach.scss';
import Card from '../components/CardNoButton';

const OurApproach = () => {
	return (
		<section className='our-approach' id='our-approach-id'>
			<div className='our-approach-head'>
				<h6>our approach</h6>
				<h1>Your trusted digital partner.</h1>
			</div>

			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
				<Card 
					numStroke={'01'} 
					pitchHeading1={'Industry Experts'}
					pitchHeading2={''} 
					pitchText={'We have over 20 years’ experience providing award-winning digital solutions to the real estate industry. Our success is supported by our agile project management method, allowing us to react quickly to challenges and take advantage of opportunities.'}
					color={'rgb(240, 72, 104)'}
				/>
				<Card 
					numStroke={'02'} 
					pitchHeading1={'Results-Driven'}
					pitchHeading2={''} 
					pitchText={'Facts and figures are the heart of our strategic solutions and we continue to successfully drive conversions for our clients. We have established ourselves as a leader in the real estate industry by building our own custom databases and tools.'}
					color={'rgb(240, 72, 104)'}
				/>
				<Card 
					numStroke={'03'} 
					pitchHeading1={'Holistic Approach'}
					pitchHeading2={''} 
					pitchText={'Three pillars define our partnerships: trust, transparency, and collaboration. We focus on our relationship with you, what your needs and goals are, and we use our data-centric approach to provide optimal solutions that meet your goals.'}
					color={'rgb(240, 72, 104)'}
				/>
			</div>
		</section>
	);
}

export default OurApproach;