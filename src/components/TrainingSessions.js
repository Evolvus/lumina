import React, { useState, useEffect } from 'react';

const TrainingSessions = () => {
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [pastActivities, setPastActivities] = useState([]);

  useEffect(() => {
    // Fetch training sessions data from an API or database
    const fetchTrainingSessions = async () => {
      const response = await fetch('/api/training-sessions');
      const data = await response.json();
      setUpcomingSessions(data.upcoming);
      setPastActivities(data.past);
    };

    fetchTrainingSessions();
  }, []);

  return (
    <div>
      <h3>Upcoming Training Sessions</h3>
      <ul>
        {upcomingSessions.map((session) => (
          <li key={session.id}>
            {session.title} - {session.date}
          </li>
        ))}
      </ul>
      <h3>Past Training Activities</h3>
      <ul>
        {pastActivities.map((activity) => (
          <li key={activity.id}>
            {activity.title} - {activity.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingSessions;
