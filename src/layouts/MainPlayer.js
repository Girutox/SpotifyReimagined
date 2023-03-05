import ImageHolderT02 from '../components/ImageHolderT02';
import styles from './MainPLayer.module.scss';

const MainPlayer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.musicInfoGroup}>
        <img
          src={require('../assets/images/album-after-hours.png')}
          width={40}
          height={40}
          alt=""
        />
        <div className={styles.titleSubtitleGroup}>
          <h2>Blinding Lights</h2>
          <h3>The Weeknd</h3>
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
