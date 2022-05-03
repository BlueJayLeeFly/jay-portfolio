function MenuIcon(props) {
  const title = props.title || 'segmentation';

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
        <line fill="none" x1="27" x2="31" y1="6" y2="6" />
        <line fill="none" stroke="#ffffff" x1="1" x2="22" y1="6" y2="6" />
        <line fill="none" x1="5" x2="1" y1="16" y2="16" />
        <line fill="none" stroke="#ffffff" x1="31" x2="10" y1="16" y2="16" />
        <line fill="none" x1="27" x2="31" y1="26" y2="26" />
        <line fill="none" stroke="#ffffff" x1="1" x2="22" y1="26" y2="26" />
      </g>
    </svg>
  );
}

export default MenuIcon;
