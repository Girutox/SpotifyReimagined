import './App.scss';

// import PerfectScrollbar from 'react-perfect-scrollbar';

import artistImage from './assets/images/The-Weeknd-PNG-Images.png';
import MainPlayer from './layouts/MainPlayer';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      {/* <PerfectScrollbar> */}
      <LandingPage />
      <img src={artistImage} alt="" />
      <MainPlayer />
      {/* </PerfectScrollbar> */}
    </div>
  );
}

export default App;
