import React from 'react';
// Styles
import '../styles/StyledOurMission.scss';
// Images
import bamOffice from '../images/bam-office.f6c7d00b.jpg';

const OurMission = () => {
	return (
		<section className='our-mission'>
			<div className='our-mission-head'>
				<h6>our mission</h6>
				<h1>Innovation driven by data and experience.</h1>
			</div>

			<div className='our-mission-content'>
				<img src={bamOffice} alt='Bam Office' />

				<p>
					At Bam Digital, we collect and leverage real-time data to drive our creative and strategic decision-making.
					<br /><br />
					We use data insights and market intelligence to inform our website designs, 
					interactive touchscreen experiences, digital marketing campaigns, and brand consulting. 
					We believe in partnering with you—collaborating through iterations, testing, and transparency—to provide full value.
				</p>
			</div>
		</section>
	);
}

export default OurMission;