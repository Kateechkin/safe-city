import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowLeft() {
  return (
    <Svg width={20} height={22} viewBox="0 0 20 22" fill="none">
      <Path
        d="M3.82 13.928l9.253 7.662c.65.547 1.624.547 2.273 0 .65-.548.65-1.369 0-1.916l-7.954-6.84 7.954-6.841c.65-.548.65-1.369 0-1.916-.324-.273-.65-.41-1.136-.41-.487 0-.812.137-1.137.41L3.82 11.74c-.65.684-.65 1.505 0 2.189 0-.137 0-.137 0 0z"
        fill="#E8EEE9"
      />
    </Svg>
  );
}

export default SvgArrowLeft;
