import * as React from 'react';
import Svg, {Ellipse, Path} from 'react-native-svg';

function SvgNotification() {
  return (
    <Svg width={24} height={26} viewBox="0 0 24 26" fill="none">
      <Ellipse cx={11.9999} cy={1.6} rx={2.4} ry={1.6} fill="#3D4047" />
      <Path
        d="M21.442 18.205c-.21-.388-.465-.775-.75-1.186a7.274 7.274 0 01-1.372-3l-.315-4.572c-.188-3.542-2.19-7.122-6.172-7.122h-1.665c-3.983 0-6 3.58-6.203 7.114l-.315 4.58a7.38 7.38 0 01-1.373 3.031c-.255.403-.51.775-.682 1.124a1.77 1.77 0 00-.15 1.806c.163.3.404.547.696.714.29.166.621.247.954.231h5.79a2.398 2.398 0 00.273 2.128c.207.306.483.555.803.728a2.192 2.192 0 002.078 0c.32-.173.596-.422.803-.728a2.397 2.397 0 00.273-2.128h5.79c.336.013.668-.072.96-.245.292-.172.53-.426.69-.732a1.704 1.704 0 00-.113-1.743zM12.75 21.7a.793.793 0 01-.126.43.756.756 0 01-.337.286.728.728 0 01-.817-.168.8.8 0 01-.163-.845.77.77 0 01.276-.347.733.733 0 01.947.096c.141.145.22.342.22.548zm7.5-2.457c0 .062-.128.132-.315.132H4.095c-.188 0-.285-.07-.315-.132-.03-.062 0-.147.075-.271.202-.357.435-.729.675-1.1.75-1.116 1.5-2.387 1.612-3.744l.323-4.58c.157-2.62 1.485-5.673 4.703-5.673h1.665c3.217 0 4.545 3.053 4.702 5.68l.323 4.573c.09 1.372.892 2.628 1.642 3.744.24.372.473.774.712 1.17a.197.197 0 01.038.201z"
        fill="#3D4047"
      />
    </Svg>
  );
}

export default SvgNotification;
