import React, { useEffect, useState } from 'react';

function ViewTasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Retrieve tasks from local storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div>
      <h2>View Tasks</h2>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <h3>{task.title}</h3>
              <p>Date: {task.date}</p>
              <p>Description: {task.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default ViewTasksPage;
