const express = require('express');
const LinkedList = require('./LinkedList');
const app = express();
const PORT = 3000;

app.use(express.json());

const taskList = new LinkedList();

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(taskList.toArray());
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }
  taskList.append(task);
  res.status(201).json({ message: 'Task added successfully', task });
});

// Get a task by index
app.get('/tasks/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const task = taskList.getAt(index);
  if (task) {
    res.json(task.data);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Remove a task by index
app.delete('/tasks/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const removedTask = taskList.removeAt(index);
  if (removedTask) {
    res.json({ message: 'Task removed successfully', task: removedTask.data });
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});