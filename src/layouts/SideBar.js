import spotifyIcon from '../assets/images/spotify-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import searchIcon from '../assets/images/icons8-search.svg';
import circleIcon from '../assets/images/icons8-circle-100.png';
import instagramIcon from '../assets/images/icons8-turntable-64.png';
import microphoneIcon from '../assets/images/icons8-microphone-48.png';
import musicIcon from '../assets/images/icons8-music-library-50.png';

import ImageHolderT01 from '../components/ImageHolderT01';

import styles from './SideBar.module.scss';

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoGroup}>
        <ImageHolderT01 className={styles.logo} image={spotifyIcon} />
      </div>
      <nav className={styles.otherGroup}>
        <a
          // eslint-disable-next-line no-undef
          href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=${process.env.REACT_APP_SCOPE}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`}>
          <ImageHolderT01 image={avatarIcon} />
        </a>
        <ImageHolderT01 image={searchIcon} />
        <ImageHolderT01 image={circleIcon} />
        <ImageHolderT01 image={instagramIcon} />
        <ImageHolderT01 image={microphoneIcon} />
        <ImageHolderT01 image={musicIcon} />
      </nav>
    </div>
  );
};

export default SideBar;
