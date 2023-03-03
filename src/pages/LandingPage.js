import SideBar from '../layouts/SideBar';
import NavBar from '../layouts/NavBar';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={styles.maincontainer}>
      <SideBar />
      <div className={styles.contentGroup}>
        <NavBar />
        <main>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet recusandae iure
            eveniet? Iure, voluptatum. Sapiente ad nemo deserunt veniam, eveniet itaque tempora
            voluptatibus, officiis ut obcaecati non tempore aspernatur?
          </p>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
