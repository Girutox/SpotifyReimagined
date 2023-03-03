import PropTypes from 'prop-types';

import styles from './ImageHolderT01.module.scss';

const ImageHolderT01 = ({ className, image }) => {
  return (
    <img
      className={`${styles.image} ${className ?? ''}`}
      src={image}
      width={25}
      height={25}
      alt=""
    />
  );
};
ImageHolderT01.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string
};

export default ImageHolderT01;
