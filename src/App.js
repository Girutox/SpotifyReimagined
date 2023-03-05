import './App.scss';

import artistImage from './assets/images/The-Weeknd-PNG-Images.png';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <img src={artistImage} alt="" />
    </div>
  );
}

export default App;
