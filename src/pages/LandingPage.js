import SideBar from '../layouts/SideBar';
import NavBar from '../layouts/NavBar';

import { popularSongsData } from '../models/popularSongsData';
import { albumsData } from '../models/albumsData';

// import ScrollContainer from 'react-indiana-drag-scroll';

import albumCover from '../assets/images/album-take-my-breath.jpeg';

import styles from './LandingPage.module.scss';
import SongItem from '../components/SongItem';
import { useState } from 'react';

const LandingPage = () => {
  const [popularSongsDataLocal, setPopularSongsDataLocal] = useState(popularSongsData);

  const changeActiveSongHandler = (id) => {
    setPopularSongsDataLocal(
      popularSongsDataLocal.map((item) => {
        item.active = item.id === id;
        return item;
      })
    );
  };

  return (
    <div className={styles.maincontainer}>
      <SideBar />
      <div className={styles.contentGroup}>
        <NavBar />
        <main>
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
                    title={item.title}
                    views={item.views}
                    duration={item.duration}
                    liked={item.liked}
                    active={item.active}
                    onClick={() => changeActiveSongHandler(item.id)}
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
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
