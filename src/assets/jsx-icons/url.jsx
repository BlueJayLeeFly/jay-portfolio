import React from 'react';

function Url(props) {
	const title = props.title || "url";

	return (
		<svg height="32" width="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#ffffff" stroke="#ffffff" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
		<path d="M11,15.7a5.639,5.639,0,0,0-4.343,1.646l-3,3a5.657,5.657,0,0,0,0,8h0a5.657,5.657,0,0,0,8,0l3-3A5.639,5.639,0,0,0,16.3,21" fill="none" stroke="#ffffff"/>
		<path d="M15.7,11a5.639,5.639,0,0,1,1.646-4.343l3-3a5.657,5.657,0,0,1,8,0h0a5.657,5.657,0,0,1,0,8l-3,3A5.639,5.639,0,0,1,21,16.3" fill="none" stroke="#ffffff"/>
		<line fill="none" x1="10" x2="22" y1="22" y2="10"/>
	</g>
</svg>
	);
};

export default Url;