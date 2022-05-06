import React from 'react';

function Exhibition(props) {
	const title = props.title || "exhibition";

	return (
		<svg height="32" width="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#ffffff" stroke="#ffffff" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
		<rect height="14" width="20" fill="none" x="6" y="1"/>
		<line fill="none" stroke="#ffffff" x1="1" x2="1" y1="31" y2="20"/>
		<line fill="none" stroke="#ffffff" x1="31" x2="31" y1="31" y2="20"/>
		<line fill="none" stroke="#ffffff" x1="16" x2="16" y1="31" y2="20"/>
		<path d="M1,22a14.7,14.7,0,0,0,7,2.018,13.257,13.257,0,0,0,8-2.685,13.257,13.257,0,0,0,8,2.685A14.7,14.7,0,0,0,31,22" fill="none" stroke="#ffffff" strokeLinecap="butt"/>
	</g>
</svg>
	);
};

export default Exhibition;