import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function SvgInfo() {
  return (
    <Svg width={33} height={35} viewBox="0 0 256 256">
      <Path fill="none" d="M0 0H256V256H0z" />
      <Circle
        cx={128}
        cy={128}
        r={96}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        d="M120 120L128 120 128 176 136 176"
      />
      <Circle cx={128} cy={84} r={12} />
    </Svg>
  );
}

export default SvgInfo;
