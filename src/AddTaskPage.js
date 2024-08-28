import React, { useState } from 'react';

function AddTaskPage() {
  const [task, setTask] = useState({
    date: '',
    title: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing tasks from local storage or initialize as an empty array
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    // Add the new task
    const updatedTasks = [...existingTasks, task];

    // Save tasks back to local storage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Clear the form
    setTask({ date: '', title: '', description: '' });
    
    alert('Task added successfully!');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input 
            type="date" 
            name="date" 
            value={task.date} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            name="title" 
            value={task.title} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            name="description" 
            value={task.description} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTaskPage;
