import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 204 204" {...props}>
      <image width="204px" height="204px" href="/images/custom/site-logo-mobile.png" />
    </Svg>
  );
};

export default Icon;
