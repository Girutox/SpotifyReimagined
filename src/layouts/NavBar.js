import TabItem from '../components/TabItem';
import TabPageArrow from '../components/TabPageArrow';
import ScrollContainer from 'react-indiana-drag-scroll';

import { tabData } from '../models/tabData';

import styles from './NavBar.module.scss';
import { useState } from 'react';

const NavBar = () => {
  const [tabDataLocal, setTabDataLocal] = useState(tabData);

  const changePageArrowHandler = (next) => {
    let currentIndex = tabDataLocal.findIndex((a) => a.active);
    if (next) {
      currentIndex += 1;
    } else {
      currentIndex -= 1;
    }

    let activeTabId = null;
    if (currentIndex + 1 <= tabDataLocal.length && currentIndex >= 0) {
      setTabDataLocal(
        tabDataLocal.map((item, index) => {
          if (index === currentIndex) {
            activeTabId = item.id;
            item.active = true;
          } else {
            item.active = false;
          }
          return item;
        })
      );
    }

    const element = document.getElementById(`tabItem${activeTabId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeActiveTabHandler = (id) => {
    setTabDataLocal(
      tabDataLocal.map((item) => {
        item.active = item.id === id;
        return item;
      })
    );
  };

  return (
    <nav className={styles.container}>
      <div className={styles.arrowGroup}>
        <TabPageArrow onClick={() => changePageArrowHandler(false)} text={'<'} />
        <TabPageArrow onClick={() => changePageArrowHandler(true)} text={'>'} />
      </div>
      <ScrollContainer className={`scroll-container ${styles.tabGroup}`}>
        {tabDataLocal?.map((item) => (
          <TabItem
            key={item.id}
            id={item.id}
            prefixIconType={item.prefixIconType}
            title={item.title}
            subtitle={item.subtitle}
            sufixIconType={item.sufixIconType}
            active={item.active}
            onClick={changeActiveTabHandler}
          />
        ))}
      </ScrollContainer>
    </nav>
  );
};

export default NavBar;
