import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgVK() {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <G clipPath="url(#clip0_39_233)">
        <Path
          d="M4.93 0H27.07a4.931 4.931 0 014.93 4.93V27.07A4.931 4.931 0 0127.07 32H4.931A4.931 4.931 0 010 27.069V4.931A4.931 4.931 0 014.93 0z"
          fill="#4C75A3"
        />
        <Path
          d="M15.732 22.401h1.309s.395-.044.597-.261c.186-.2.18-.575.18-.575s-.026-1.756.79-2.015c.803-.255 1.835 1.697 2.929 2.448.827.568 1.455.444 1.455.444l2.925-.041s1.53-.094.804-1.297c-.06-.098-.422-.89-2.174-2.516-1.834-1.702-1.589-1.427.62-4.371 1.346-1.793 1.883-2.888 1.715-3.357-.16-.446-1.15-.328-1.15-.328l-3.292.02s-.244-.033-.425.075c-.177.106-.29.353-.29.353s-.522 1.388-1.217 2.568c-1.466 2.49-2.053 2.621-2.292 2.467-.558-.36-.419-1.448-.419-2.22 0-2.413.366-3.42-.712-3.68-.358-.086-.622-.143-1.537-.153-1.175-.011-2.17.004-2.733.28-.374.183-.663.592-.487.616.217.029.71.133.971.488.338.46.326 1.49.326 1.49s.194 2.84-.453 3.193c-.444.242-1.052-.252-2.36-2.51-.67-1.158-1.175-2.437-1.175-2.437s-.098-.239-.272-.367c-.21-.155-.505-.204-.505-.204l-3.13.02s-.47.014-.642.218c-.153.182-.012.558-.012.558s2.45 5.731 5.224 8.62c2.543 2.648 5.431 2.474 5.431 2.474z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_39_233">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgVK;
