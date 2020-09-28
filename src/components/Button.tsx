import React from 'react';
// Components
import '../styles/StyledButton.scss';

interface ButtonProps {
	buttonText: string;
	buttonColor: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText, buttonColor }) => {

	return (
		<a href='#'>
			<button 
				className='button-container' 
				style={{backgroundColor: buttonColor }}
			>
				{ buttonText }
			</button>
		</a>
	);
}

export default Button;