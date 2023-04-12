import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SettingIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 24 24"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <Circle
      cx={12}
      cy={12}
      r={3}
      style={{
        fill: "none",
        stroke: "#2ca9bc",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <Path
      d="M20 10h-.59a1 1 0 0 1-.94-.67v0a1 1 0 0 1 .2-1.14l.41-.41a1 1 0 0 0 0-1.42l-1.42-1.43a1 1 0 0 0-1.42 0l-.41.41a1 1 0 0 1-1.14.2h0a1 1 0 0 1-.69-.95V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.59a1 1 0 0 1-.67.94h0a1 1 0 0 1-1.14-.2l-.41-.41a1 1 0 0 0-1.42 0L4.93 6.34a1 1 0 0 0 0 1.42l.41.41a1 1 0 0 1 .2 1.14v0a1 1 0 0 1-.94.67H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.59a1 1 0 0 1 .94.67v0a1 1 0 0 1-.2 1.14l-.41.41a1 1 0 0 0 0 1.42l1.41 1.41a1 1 0 0 0 1.42 0l.41-.41a1 1 0 0 1 1.14-.2h0a1 1 0 0 1 .67.94V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.59a1 1 0 0 1 .67-.94h0a1 1 0 0 1 1.14.2l.41.41a1 1 0 0 0 1.42 0l1.41-1.41a1 1 0 0 0 0-1.42l-.41-.41a1 1 0 0 1-.2-1.14v0a1 1 0 0 1 .94-.67H20a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Z"
      style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </Svg>
);
export default SettingIcon;
