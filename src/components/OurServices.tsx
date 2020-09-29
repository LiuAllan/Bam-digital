import React from 'react';
// Styles
import '../styles/StyledOurServices.scss';
import Card from '../components/Card';

const OurServices = () => {
	return (
		<section className='our-services' id='our-services-id'>
			<div className='our-services-head'>
				<h6>our services</h6>
				<h1>What we do best.</h1>
			</div>

			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
				<Card 
					numStroke={'01'} 
					pitchHeading1={'Design &'}
					pitchHeading2={'Engineering'} 
					pitchText={'Our beautifully designed solutions put the user experience first, without sacrificing conversion goals.'}
					color={'rgb(242, 137, 0)'}
				/>
				<Card 
					numStroke={'02'} 
					pitchHeading1={'Digital'}
					pitchHeading2={'Marketing'} 
					pitchText={'Next gen marketing strategy backed by full cycle prospect data and insights from first engagement to conversion.'}
					color={'rgb(9, 188, 138)'}
				/>
				<Card 
					numStroke={'03'} 
					pitchHeading1={'Data'}
					pitchHeading2={'Intelligence'} 
					pitchText={'Eliminate assumptions every step of the way with our in-house analytics software to maximize efficiency and results.'}
					color={'rgb(117, 120, 255)'}
				/>
			</div>
		</section>
	);
}

export default OurServices;