function Close(props) {
  const title = props.title || 'close';

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
        <line fill="none" stroke="#ffffff" x1="27" x2="5" y1="5" y2="27" />
        <line fill="none" stroke="#ffffff" x1="27" x2="5" y1="27" y2="5" />
      </g>
    </svg>
  );
}

export default Close;
