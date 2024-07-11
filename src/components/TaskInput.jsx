import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task.trim());
      setTask("");
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={9}>
        <TextField
          variant="outlined"
          placeholder="Add a task"
          fullWidth
          value={task}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskInput;
