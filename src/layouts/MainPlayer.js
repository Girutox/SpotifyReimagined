import { useEffect, useState } from 'react';

import SpotifyPlayer from 'react-spotify-web-playback';

import ImageHolderT02 from '../components/ImageHolderT02';
import styles from './MainPLayer.module.scss';

const MainPlayer = () => {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState('');
  useEffect(() => {
    const hash = window.location.hash;
    let tokenLocal = '';

    if (hash) {
      tokenLocal = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', tokenLocal);
    }

    setToken(tokenLocal);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.musicInfoGroup}>
        {/* <img
          src={require('../assets/images/album-after-hours.png')}
          width={40}
          height={40}
          alt=""
        />
        <div className={styles.titleSubtitleGroup}>
          <h2>Blinding Lights</h2>
          <h3>The Weeknd</h3>
        </div> */}
        <div className={styles.playerGroup}>
          <SpotifyPlayer
            token={window.localStorage.getItem('token')}
            uris={['spotify:track:0VjIjW4GlUZAMYd2vXMi3b']}
            initialVolume={0.5}
            hideAttribution={true}
            styles={{
              trackNameColor: '#fff',
              sliderColor: '#fff',
              sliderHandleColor: '#fff',
              color: '#fff'
            }}
          />
        </div>
      </div>
      <div className={styles.remotePlayGroup}>
        <div>
          <img
            src={require('../assets/images/icons8-turntable-64.png')}
            width={25}
            height={25}
            alt=""
          />
          <span>Livestreaming to &quot;Remote Play&quot; Party</span>
        </div>
        <div>
          <ImageHolderT02 />
          <span>31 People Listening</span>
        </div>
      </div>
    </div>
  );
};

export default MainPlayer;
