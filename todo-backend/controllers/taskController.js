let tasks = [
  { id: 1, name: "Learn React", completed: false },
  { id: 2, name: "Build a To-Do App", completed: false },
];

exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

exports.addTask = (req, res) => {
  const newTask = {
    id: Date.now(),
    name: req.body.name,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.toggleTaskCompletion = (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

exports.deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  tasks = tasks.filter((t) => t.id !== taskId);
  res.status(204).send();
};
