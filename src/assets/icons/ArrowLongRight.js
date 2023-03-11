import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgArrowLongRight({color}) {
  return (
    <Svg width={20} height={10} viewBox="0 0 20 10" fill="none">
      <G clipPath="url(#clip0_54_516)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.803 1.678l1.424 1.484a.494.494 0 01-.366.836H.834C.277 3.998 0 4.448 0 5v-.008c0 .553.277 1.009.834 1.009h15.012c.445 0 .672.54.363.857l-1.416 1.46a.99.99 0 00.04 1.41l.002.005a1.007 1.007 0 001.41-.043l3.204-3.343a1.992 1.992 0 00-.007-2.757L16.266.307a1.003 1.003 0 00-1.402-.042l-.01.01a.985.985 0 00-.051 1.403z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_54_516">
          <Path fill="#fff" d="M0 0H20V10H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgArrowLongRight;
