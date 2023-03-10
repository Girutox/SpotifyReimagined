import PropTypes from 'prop-types';

import SideBar from '../layouts/SideBar';
import NavBar from '../layouts/NavBar';

import { Routes, Route } from 'react-router-dom';

import styles from './LandingPage.module.scss';
import ArtistSpotlight from './ArtistSpotlight';

const LandingPage = ({ onSetUriTrack, onSetPlayerStatus }) => {
  return (
    <div className={styles.maincontainer}>
      <SideBar />
      <div className={styles.contentGroup}>
        <NavBar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <ArtistSpotlight
                  onSetUriTrack={onSetUriTrack}
                  onSetPlayerStatus={onSetPlayerStatus}
                />
              }
            />
            <Route path="/artistPlaylist" element={<h1>It Works!</h1>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
LandingPage.propTypes = {
  onSetUriTrack: PropTypes.func,
  onSetPlayerStatus: PropTypes.func
};

export default LandingPage;
