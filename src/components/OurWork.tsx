import React from 'react';
import '../styles/StyledOurWork.scss';
import StoriesRow from './StoriesRow';
// Images

const OurWork = () => {
	return (
		<section className='our-work'>
			<div className='our-work-head'>
				<h6>our work</h6>
				<h1>Our success stories.</h1>
			</div>

			<StoriesRow 
				column1={'Walton Lofts'} 
				column2={'Gryphon Development'} 
				backgroundImgColumn1={require('../images/walton_lofts.jpg')}
				backgroundImgColumn2={require('../images/gryphon.jpg')} 
			/>
			<StoriesRow 
				column1={'Centra'} 
				column2={'Spire'} 
				backgroundImgColumn1={require('../images/centra.jpg')}
				backgroundImgColumn2={require('../images/spire.jpg')} 
			/>
			<StoriesRow 
				column1={'The Holland'} 
				column2={'VPAC Construction'} 
				backgroundImgColumn1={require('../images/holland.jpg')}
				backgroundImgColumn2={require('../images/vpac.jpg')} 
			/>

		</section>
	);
}

export default OurWork;