import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Moon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <Path
      fill="#000000"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"
    />
  </Svg>
);
export default Moon;
