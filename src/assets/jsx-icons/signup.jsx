function SignUp(props) {
  const title = props.title || 'SignUp';

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
          d=" M20.999,20.687C19.139,20.289,16.818,20,14,20c-5.57,0-9.247,1.165-11.227,2.043C1.69,22.524,1,23.598,1,24.783V30h14"
          fill="none"
          stroke="#ffffff"
        />
        <path
          d="M7,8c0-3.866,3.134-7,7-7 s7,3.134,7,7s-3.134,8-7,8S7,11.866,7,8z"
          fill="none"
          stroke="#ffffff"
        />
        <polyline fill="none" points=" 20,27 23,30 30,23 " />
      </g>
    </svg>
  );
}

export default SignUp;
