function ClearData(props) {
  const title = props.title || 'clear data';

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
        <line
          fill="none"
          stroke="#ffffff"
          x1="26.999"
          x2="17.827"
          y1="2"
          y2="13.629"
        />
        <line fill="none" x1="23" x2="31" y1="20" y2="19.999" />
        <line fill="none" x1="22" x2="31" y1="25" y2="24.999" />
        <line fill="none" x1="23.999" x2="31" y1="30" y2="30" />
        <path
          d="M16,13a3,3,0,0,1,3,3,5.468,5.468,0,0,1-.307,1.336A14.934,14.934,0,0,0,19.387,31H1C1,21.059,6.059,13,16,13Z"
          fill="none"
          stroke="#ffffff"
        />
        <path
          d="M12.276,13.429a4.924,4.924,0,0,0,5.539,6.489"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="butt"
        />
        <path
          d="M7.28,25a22.034,22.034,0,0,0-.151,6"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="butt"
        />
        <path
          d="M12.6,25a18.446,18.446,0,0,0,.661,6"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="butt"
        />
      </g>
    </svg>
  );
}

export default ClearData;
