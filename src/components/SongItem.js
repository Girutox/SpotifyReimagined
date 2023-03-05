import PropTypes from 'prop-types';

import hearthIcon from '../assets/images/heart-svgrepo-com.svg';
import audioWaveIcon from '../assets/images/icons8-audio-wave-50.png';

import styles from './SongItem.module.scss';

const SongItem = ({ id, title, views, duration, liked, active, onClick }) => {
  return (
    <div
      id={`songItem${id}`}
      className={`${styles.container} ${active ? styles['container__active'] : ''}`}
      onClick={() => onClick(id)}>
      <div>
        <span className={`${active ? styles.activeTitle : ''}`}>{title}</span>
        {active && <img src={audioWaveIcon} width={15} height={12} alt="" />}
      </div>
      <div>
        <span>{views}</span>
      </div>
      <div>
        <span>{duration}</span>
      </div>
      <div>{liked && <img src={hearthIcon} width={15} height={15} alt="" />}</div>
    </div>
  );
};
SongItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  views: PropTypes.string,
  duration: PropTypes.string,
  liked: PropTypes.bool,
  active: PropTypes.bool,
  onClick: () => {}
};

export default SongItem;
