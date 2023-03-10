import { useState } from 'react';
import './App.scss';

// import PerfectScrollbar from 'react-perfect-scrollbar';

import artistImage from './assets/images/The-Weeknd-PNG-Images.png';
import MainPlayer from './layouts/MainPlayer';

import LandingPage from './pages/LandingPage';

function App() {
  const [uriTrack, setUriTrack] = useState('');
  const [play, setPlay] = useState(false);

  const setUriTrackHandler = (uri) => {
    setUriTrack(uri);
  };

  const setPlayerStatusHandler = (value) => {
    setPlay(value);
  };

  return (
    <div className="App">
      {/* <PerfectScrollbar> */}
      <LandingPage onSetUriTrack={setUriTrackHandler} onSetPlayerStatus={setPlayerStatusHandler} />
      <img src={artistImage} alt="" />
      <MainPlayer uriTrack={uriTrack} play={play} />
      {/* </PerfectScrollbar> */}
    </div>
  );
}

export default App;
