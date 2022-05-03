import React from 'react';

function Password(props) {
	const title = props.title || "password";

	return (
		<svg height="32" width="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#ffffff" stroke="#ffffff" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
		<rect height="12" width="18" fill="none" stroke="#ffffff" x="7" y="11"/>
		<circle cx="16" cy="17" fill="none" r="2" stroke="#ffffff"/>
		<circle cx="9" cy="30" r="2" stroke="none"/>
		<circle cx="16" cy="30" r="2" stroke="none"/>
		<circle cx="23" cy="30" r="2" stroke="none"/>
		<circle cx="30" cy="30" r="2" stroke="none"/>
		<circle cx="2" cy="30" r="2" stroke="none"/>
		<path d="M21,11V6a4.951,4.951,0,0,0-4.9-5H16a4.951,4.951,0,0,0-5,4.9V11" fill="none" stroke="#ffffff"/>
	</g>
</svg>
	);
};

export default Password;