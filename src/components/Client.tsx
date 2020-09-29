import React from 'react';
import '../styles/StyledClients.scss';
// Images
import anthem from '../images/clients/anthem.png';
import aoyuan from '../images/clients/aoyuan.png';
import aquilini from '../images/clients/aquilini.png';
import beedie from '../images/clients/beedie.png';
import colliers from '../images/clients/colliers.png';
import concord from '../images/clients/concord.png';
import gryphon from '../images/clients/gryphon.png';
import laconia from '../images/clients/laconia.png';
import onni from '../images/clients/onni.png';
import polygon from '../images/clients/polygon.png';
import realogics from '../images/clients/realogics.png';
import townline from '../images/clients/townline.png';

interface ClientProps {
	image1: string,
	image2: string,
	image3: string,
	image4: string,
	image5: string,
	image6: string,
}

const Client: React.FC<ClientProps> = ({ image1, image2, image3, image4, image5, image6 }) => {
	return (
		<div className='image-container'>
			<img src={image1} alt='' />
			<img src={image2} alt='' />
			<img src={image3} alt='' />
			<img src={image4} alt='' />
			<img src={image5} alt='' />
			<img src={image6} alt='' />
		</div>
	);
}

export default Client;