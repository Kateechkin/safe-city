import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAllApp() {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Path
        d="M14.167 4.167H7.5A3.333 3.333 0 004.167 7.5v6.667A3.333 3.333 0 007.5 17.5h6.667a3.333 3.333 0 003.333-3.333V7.5a3.333 3.333 0 00-3.333-3.333zM32.5 4.167h-6.667A3.333 3.333 0 0022.5 7.5v6.667a3.333 3.333 0 003.333 3.333H32.5a3.333 3.333 0 003.333-3.333V7.5A3.333 3.333 0 0032.5 4.167zM14.167 22.5H7.5a3.333 3.333 0 00-3.333 3.333V32.5A3.333 3.333 0 007.5 35.833h6.667A3.333 3.333 0 0017.5 32.5v-6.667a3.333 3.333 0 00-3.333-3.333zM32.5 22.5h-6.667a3.333 3.333 0 00-3.333 3.333V32.5a3.333 3.333 0 003.333 3.333H32.5a3.333 3.333 0 003.333-3.333v-6.667A3.333 3.333 0 0032.5 22.5z"
        stroke="#000"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default SvgAllApp;