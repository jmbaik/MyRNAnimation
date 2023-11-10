import React from 'react';
import YoutubeMusic from './src/youtube/YoutubeMusic';
import {RecoilRoot} from 'recoil';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <YoutubeMusic />
    </RecoilRoot>
  );
}

export default App;
