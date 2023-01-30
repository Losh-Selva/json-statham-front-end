import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import LeaderboardContainer from './containers/LeaderboardContainer';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>DefinitelyNotIMDB</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </header>
      <body>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/leaderboard" element={<LeaderboardContainer />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </body>
      <footer>

      </footer>
    </BrowserRouter>
  );
}

export default App;
