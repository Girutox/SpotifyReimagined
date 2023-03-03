import PropTypes from 'prop-types';

import styles from './TabPageArrow.module.scss';

const TabPageArrow = ({ text, onClick }) => {
  return (
    <button onClick={() => onClick()} className={styles.button} type="button">
      {text}
    </button>
  );
};
TabPageArrow.propTypes = {
  text: PropTypes.string,
  onClick: () => {}
};

export default TabPageArrow;
