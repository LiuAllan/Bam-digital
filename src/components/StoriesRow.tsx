import React from 'react';
import '../styles/StyledStoriesRow.scss';

interface StoriesProps {
	column1: string,
	column2: string,
	backgroundImgColumn1: string,
	backgroundImgColumn2: string,
};

const StoriesRow: React.FC<StoriesProps> = ({ column1, column2, backgroundImgColumn1, backgroundImgColumn2 }) => {
	return (
		<div className='row'>
			<div 
				className='column column1' 
				style={{ 
					backgroundImage: `url(${backgroundImgColumn1})` }}
			>
				<h1>{column1}</h1>
			</div>
			<div 
				className='column column2' 
				style={{ 
					backgroundImage: `url(${backgroundImgColumn2})` }}
			>
				<h1>{column2}</h1>
			</div>
		</div>
	);
}


export default StoriesRow;