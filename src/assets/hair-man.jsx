function HairMan(props) {
  const title = props.title || 'hair man';

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
        <path
          d="M26,12c0,6.627-4.477,13-10,13S6,18.627,6,12"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="butt"
        />
        <path
          d="M12,25V23.837l0,2.677A3,3,0,0,1,9.55,29.459L4,30.5"
          fill="none"
          stroke="#ffffff"
        />
        <path
          d="M20,25V23.837l0,2.677a3,3,0,0,0,2.446,2.945L28,30.5"
          fill="none"
          stroke="#ffffff"
        />
        <path
          d="M16,1C10.477,1,5,2,6,12c0,.237.018.472.029.707A3.988,3.988,0,0,1,10,9h7a4,4,0,0,0,4-4V6a6,6,0,0,0,5.006,5.911C26.962,2,21.506,1,16,1Z"
          fill="none"
        />
      </g>
    </svg>
  );
}

export default HairMan;
