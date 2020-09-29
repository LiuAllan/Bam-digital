import React from 'react';
import '../styles/StyledOurClients.scss';
import Client from './Client';

const OurClients = () => {
	return (
		<section className='our-clients'>
			<div className='our-clients-head'>
				<h6>our clients</h6>
				<h1>Our network.</h1>
			</div>

			<div className='table'>
				<div className='eachTable'>
					<Client 
						image1={require('../images/clients/polygon.png')}
						image2={require('../images/clients/gryphon.png')}
						image3={require('../images/clients/aoyuan.png')}
						image4={require('../images/clients/aquilini.png')}
						image5={require('../images/clients/realogics.png')}
						image6={require('../images/clients/townline.png')}
					/>
				</div>
				<div className='eachTable'>
					<Client 
						image1={require('../images/clients/concord.png')}
						image2={require('../images/clients/colliers.png')}
						image3={require('../images/clients/anthem.png')}
						image4={require('../images/clients/beedie.png')}
						image5={require('../images/clients/onni.png')}
						image6={require('../images/clients/laconia.png')}
					/>
				</div>
			</div>

		</section>
	);
}

export default OurClients;