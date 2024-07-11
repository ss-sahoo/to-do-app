import { Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { addTask, deleteTask, editTask, toggleTask } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach((task) => dispatch(addTask(task.text)));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEditTask = (index, newTask) => {
    dispatch(editTask(index, newTask));
  };

  const handleToggleTask = (index) => {
    dispatch(toggleTask(index));
  };

  return (
    <Container maxWidth="md">
      <Paper style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h4" gutterBottom>
          To-Do List
        </Typography>
        <TaskInput addTask={handleAddTask} />
        <Grid container justifyContent="flex-start">
          <Grid item xs={12} md={8}>
            <TaskList
              tasks={tasks}
              deleteTask={handleDeleteTask}
              editTask={handleEditTask}
              toggleTask={handleToggleTask}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
