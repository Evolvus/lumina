import React from 'react';
import Leaderboard from './components/Leaderboard';
import TrainingSessions from './components/TrainingSessions';
import DeveloperProfile from './components/DeveloperProfile';

function App() {
  return (
    <div>
      <header className="bg-primary text-white text-center py-3">
        <h1>Lumina</h1>
        <p>Developer Community Hub</p>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Lumina</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#leaderboard">Leaderboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#training-sessions">Training Sessions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#developer-profiles">Developer Profiles</a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container my-4">
        <section id="leaderboard">
          <h2>Leaderboard</h2>
          <p>Top contributors based on their coin balance.</p>
          <Leaderboard />
        </section>
        <section id="training-sessions">
          <h2>Upcoming Training Sessions</h2>
          <p>Stay informed about upcoming training sessions and record your training-related activities.</p>
          <TrainingSessions />
        </section>
        <section id="developer-profiles">
          <h2>Developer Profiles</h2>
          <p>Explore the profiles of developers and their contributions.</p>
          <DeveloperProfile />
        </section>
      </main>
      <footer className="bg-light text-center py-3">
        <p>&copy; 2025 Evolvus Solutions Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
