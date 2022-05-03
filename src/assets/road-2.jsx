import React from 'react';

function Road2(props) {
	const title = props.title || "road 2";

	return (
		<svg height="32" width="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#ffffff" stroke="#ffffff" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
		<line fill="none" stroke="#ffffff" strokeLinecap="butt" x1="1" x2="10" y1="30" y2="2"/>
		<line fill="none" stroke="#ffffff" strokeLinecap="butt" x1="22" x2="31" y1="2" y2="30"/>
		<line fill="none" x1="16" x2="16" y1="5" y2="8"/>
		<line fill="none" x1="16" x2="16" y1="13" y2="17"/>
		<line fill="none" x1="16" x2="16" y1="22" y2="27"/>
	</g>
</svg>
	);
};

export default Road2;