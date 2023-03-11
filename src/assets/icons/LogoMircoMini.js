import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function SvgLogoMicro() {
  return (
    <Svg width={40} height={40} viewBox="0 0 52 50" fill="none">
      <Rect width={52} height={50} rx={8} fill="#fff" />
      <Rect x={0.5} y={0.5} width={51} height={49} rx={5.5} stroke="#24342F" />
      <Rect x={4} y={4} width={44} height={42} rx={6} fill="#24342F" />
      <Path
        d="M12 26.982h13V39H12V26.982z"
        fill="#00D1B6"
        stroke="#373449"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25 11h8v27.999h-8V11z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M33.036 19H40v19.999h-6.964V19zm-6.014 14.994h3.996v4.978h-3.996v-4.978z"
        fill="#00D1B6"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5 28.962h10m-10 2h10m-10 1.996h10m-10 2h10m-9.997 2.022h10M34.5 20.964h4m-4 2h4m-4 2.016h4m-4 2h4m-4 1.983h4m-4 2h4m-4 2.016h4m-4 2h4m-4 2h4M26.994 12.961v1h.996v-1h-.996zm2.99 0v1h.997v-1h-.997zm-2.99 3.007v1h.996v-1h-.996zm2.996 0v1h.996v-1h-.996zm-2.996 3.004v1h.996v-1h-.996zm2.99 0v1h.997v-1h-.997zm-2.99 3.006v1h.996v-1h-.996zm2.996 0v1h.996v-1h-.996zm-2.996 2.99v1h.996v-1h-.996zm2.996.003v1h.996v-1h-.996zm-2.996 2.991v1h.996v-1h-.996zm2.996 0v1h.996v-1h-.996zm-2.996 3v1h.996v-1h-.996zm2.996 0v1h.996v-1h-.996z"
        stroke="#fff"
      />
      <Path
        d="M15.562 11.064l.262 1.196 1.196.263-1.196.262-.262 1.196-.263-1.196-1.196-.262 1.196-.263.263-1.196zm6 4.995l.262 1.196 1.196.263-1.196.262-.262 1.196-.262-1.196-1.197-.262 1.197-.263.262-1.196zm15.999-3.999l.262 1.196 1.197.262-1.197.262-.262 1.197-.262-1.197-1.197-.262 1.197-.262.262-1.196zm-24 8.999l.262 1.197 1.197.262-1.197.262-.262 1.196-.261-1.196-1.196-.262 1.196-.262.261-1.197z"
        stroke="#fff"
        strokeWidth={0.405}
      />
    </Svg>
  );
}

export default SvgLogoMicro;
