import playlistIcon from '../assets/images/icons8-playlist-50.png';
import partyIcon from '../assets/images/icons8-turntable-64.png';
import userIcon from '../assets/images/icons8-users-64.png';
import serviceIcon from '../assets/images/icons8-services-50.png';
import audioWaveIcon from '../assets/images/icons8-audio-wave-50.png';
import radioWaveIcon from '../assets/images/icons8-radio-waves-50.png';

import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './TabItem.module.scss';

const TabItem = ({
  id,
  navUrl,
  prefixIconType,
  title,
  subtitle,
  sufixIconType,
  active,
  onClick
}) => {
  const navigate = useNavigate();

  let prefixImage = '';
  switch (prefixIconType) {
    case 1:
      prefixImage = playlistIcon;
      break;
    case 2:
      prefixImage = partyIcon;
      break;
    case 3:
      prefixImage = userIcon;
      break;
    case 4:
      prefixImage = serviceIcon;
      break;
    default:
      break;
  }

  let sufixImage = '';
  switch (sufixIconType) {
    case 1:
      sufixImage = audioWaveIcon;
      break;
    case 2:
      sufixImage = radioWaveIcon;
      break;
    default:
      break;
  }

  return (
    <div
      id={`tabItem${id}`}
      onClick={() => {
        onClick(id);
        console.log(navUrl);
        navigate(navUrl);
      }}
      className={`${styles.container} ${
        active ? styles['container__bg-active'] : styles['container__bg-inactive']
      }`}>
      {prefixIconType && (
        <img className={styles.prefixImage} src={prefixImage} width={20} height={20} alt="" />
      )}
      <div className={styles.infoGroup}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      {sufixIconType && (
        <img className={styles.sufixImage} src={sufixImage} width={20} height={20} alt="" />
      )}
      {active && (
        <div className={styles.activeLineGroup}>
          <div className={styles.activeLine}></div>
        </div>
      )}
    </div>
  );
};
TabItem.propTypes = {
  id: PropTypes.number,
  navUrl: PropTypes.string,
  prefixIconType: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sufixIconType: PropTypes.number,
  active: PropTypes.bool,
  onClick: () => {}
};

export default TabItem;
