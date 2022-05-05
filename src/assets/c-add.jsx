function CAdd(props) {
  const title = props.title || 'c add';

  return (
    <svg
      height="32"
      width="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g
        fill="#ffffff"
        stroke="#ffffff"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <line fill="none" x1="16" x2="16" y1="9" y2="23" />
        <line fill="none" x1="23" x2="9" y1="16" y2="16" />
        <circle cx="16" cy="16" fill="none" r="15" stroke="#ffffff" />
      </g>
    </svg>
  );
}

export default CAdd;
