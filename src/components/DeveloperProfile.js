import React, { useState, useEffect } from 'react';

const DeveloperProfile = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    // Fetch developer data from an API or database
    const fetchDevelopers = async () => {
      const response = await fetch('/api/developers');
      const data = await response.json();
      setDevelopers(data);
    };

    fetchDevelopers();
  }, []);

  const updateDeveloperLevel = (developer) => {
    if (developer.coins >= 100) {
      developer.level = 'Visionary';
    } else if (developer.coins >= 50) {
      developer.level = 'Innovator';
    } else if (developer.coins >= 20) {
      developer.level = 'Contributor';
    } else {
      developer.level = 'Explorer';
    }
  };

  return (
    <div>
      <h3>Developer Profiles</h3>
      <ul>
        {developers.map((developer) => (
          <li key={developer.id}>
            <h4>{developer.name}</h4>
            <p>Level: {developer.level}</p>
            <p>Coins: {developer.coins}</p>
            <p>Contributions:</p>
            <ul>
              {developer.contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${(developer.coins / 100) * 100}%` }}
                aria-valuenow={developer.coins}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeveloperProfile;
