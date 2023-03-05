// import PropTypes from 'prop-types';

import { peopleListeningData } from '../models/peopleListeningData';

import styles from './ImageHolderT02.module.scss';

const ImageHolderT02 = () => {
  return (
    <div className={styles.container}>
      {peopleListeningData?.map((item) => (
        // <span key={item.id} className={styles.avatar}>
        <img
          key={item.id}
          src={require(`../assets/images/${item.avatarFileName}`)}
          width={30}
          height={30}
          alt=""
        />
        // </span>
      ))}
    </div>
  );
};

export default ImageHolderT02;
