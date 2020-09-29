import React from 'react';
import '../styles/StyledClients.scss';

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