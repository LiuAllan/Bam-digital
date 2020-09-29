import React, { useState, useEffect } from 'react';


// https://stackoverflow.com/questions/55023041/react-hooks-how-to-implement-usehideonscroll-hook
const CheckScrolled = () => {

	const [hidden, setHidden] = useState(false);

	const handleScroll = () => {
		const top = window.pageYOffset || document.documentElement.scrollTop;
		setHidden(top !== 0);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return hidden;
};

export default CheckScrolled;