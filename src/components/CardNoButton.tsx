import React from 'react';
import Button from './Button';
import '../styles/StyledCard.scss';

interface CardProps {
	numStroke: string;
	pitchHeading1: string;
	pitchHeading2: string;
	pitchText: string;
	color: string;
}

const CardNoButton: React.FC<CardProps> = ({ numStroke, pitchHeading1, pitchHeading2,  pitchText, color }) => {
	return(
		<div className='card-container'>
			<div className='numbers-stroke' style={{ WebkitTextStroke: `1px ${color}` }}>
				<h2>{numStroke}</h2>
			</div>
			<div className='pitch-heading'>
				<h2>{pitchHeading1}</h2>
				<h2>{pitchHeading2}</h2>
			</div>
			<div className='pitch-text'>
				<p>{pitchText}</p>
			</div>
		</div>
	);
}

export default CardNoButton;