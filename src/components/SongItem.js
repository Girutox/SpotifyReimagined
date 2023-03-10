import PropTypes from 'prop-types';

import { msToTime } from '../utils/utils';

import hearthIcon from '../assets/images/heart-svgrepo-com.svg';
import audioWaveIcon from '../assets/images/icons8-audio-wave-50.png';

import styles from './SongItem.module.scss';

const SongItem = ({ id, title, views, duration, liked, active, uri, onClick }) => {
  return (
    <div
      id={`songItem${id}`}
      className={`${styles.container} ${active ? styles['container__active'] : ''}`}
      onClick={() => onClick(id, uri)}>
      <div>
        <span className={`${active ? styles.activeTitle : ''}`}>{title}</span>
        {active && <img src={audioWaveIcon} width={15} height={12} alt="" />}
      </div>
      <div>
        <span>{views}</span>
      </div>
      <div>
        <span>{msToTime(duration)}</span>
      </div>
      <div>{liked && <img src={hearthIcon} width={15} height={15} alt="" />}</div>
    </div>
  );
};
SongItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  views: PropTypes.number,
  duration: PropTypes.number,
  liked: PropTypes.bool,
  active: PropTypes.bool,
  uri: PropTypes.string,
  onClick: PropTypes.func
};

export default SongItem;
