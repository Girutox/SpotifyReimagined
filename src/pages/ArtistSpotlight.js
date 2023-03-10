import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { getArtistTopTracks } from '../services/Spotify.service';

import { albumsData } from '../models/albumsData';

import albumCover from '../assets/images/album-take-my-breath.jpeg';

import SongItem from '../components/SongItem';

import ScrollContainer from 'react-indiana-drag-scroll';

import styles from './ArtistSpotlight.module.scss';

const ArtistSpotlight = ({ onSetUriTrack, onSetPlayerStatus }) => {
  const [popularSongsDataLocal, setPopularSongsDataLocal] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const response = await getArtistTopTracks({
        artistId: '1Xyo4u8uXC1ZmMpatF05PJ',
        token: window.localStorage.getItem('token')
      });

      const data = response.data.tracks;
      for (const item of data) {
        item.active = false;
      }

      setPopularSongsDataLocal(data);
    };

    apiCall();
  }, []);

  const changeActiveSongHandler = (id, uri) => {
    setPopularSongsDataLocal(
      popularSongsDataLocal.map((item) => {
        item.active = item.id === id;
        return item;
      })
    );

    onSetPlayerStatus(false);

    setTimeout(() => {
      onSetUriTrack(uri);
      onSetPlayerStatus(true);
    }, 1000);
  };

  return (
    <>
      <div className={styles.artistInfoGroup}>
        <h2>89,293,201 MONTHLY LISTENERS</h2>
        <h3>
          The
          <br />
          Weeknd
        </h3>
        <h3>
          FOLLOWING <span>✓</span>
        </h3>
      </div>
      <ScrollContainer className="scroll-container">
        <div className={styles.musicInfoGroup}>
          <h3>NEW RELEASE</h3>
          <div className={styles.albumDisplayerGroup}>
            <img src={albumCover} width={80} height={80} alt="New release album image" />
            <div className={styles.albumInfo}>
              <h4>Take My Breath</h4>
              <h5>The Weeknd</h5>
            </div>
          </div>
          <div className={styles.popularSongsGroup}>
            <h3>POPULAR SONGS</h3>
            <div className={styles.songsGroup}>
              {popularSongsDataLocal?.map((item) => (
                <SongItem
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  views={item.popularity}
                  duration={item.duration_ms}
                  liked={false}
                  active={item.active}
                  uri={item.uri}
                  onClick={() => changeActiveSongHandler(item.id, item.uri)}
                />
              ))}
            </div>
          </div>
          <div className={styles.albumsGroup}>
            <h3>ALBUMS</h3>
            {/* <ScrollContainer className={`scroll-container ${styles.albumScrollContainer}`}> */}
            {albumsData?.map((item) => (
              <img
                key={item.id}
                src={require(`../assets/images/${item.albumFileName}`)}
                width={130}
                height={130}
                alt=""
              />
            ))}
            {/* </ScrollContainer> */}
          </div>
        </div>
      </ScrollContainer>
    </>
  );
};
ArtistSpotlight.propTypes = {
  onSetUriTrack: PropTypes.func,
  onSetPlayerStatus: PropTypes.func
};

export default ArtistSpotlight;
