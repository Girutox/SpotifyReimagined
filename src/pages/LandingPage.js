import SideBar from '../layouts/SideBar';
import NavBar from '../layouts/NavBar';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={styles.maincontainer}>
      <SideBar />
      <div className={styles.contentGroup}>
        <NavBar />
        <main></main>
      </div>
    </div>
  );
};

export default LandingPage;
