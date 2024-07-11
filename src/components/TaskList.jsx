import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";

const CompletedTaskText = styled(ListItemText)(({ theme }) => ({
  textDecoration: "line-through",
  color: theme.palette.text.disabled,
}));

const BigDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    width: "80%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
}));

const TaskList = ({ tasks, deleteTask, editTask, toggleTask }) => {
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClickOpen = (task, index) => {
    setCurrentTask(task.text);
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditTask = () => {
    if (currentTask.trim()) {
      editTask(currentIndex, currentTask.trim());
      handleClose();
    }
  };

  return (
    <>
      <List>
        {tasks.map((task, index) => (
          <Card key={index} style={{ marginBottom: 10 }}>
            <CardContent>
              {task.completed ? (
                <CompletedTaskText primary={task.text} />
              ) : (
                <Typography variant="body1">{task.text}</Typography>
              )}
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <IconButton
                edge="end"
                color={task.completed ? "error" : "success"}
                onClick={() => toggleTask(index)}
              >
                {task.completed ? <CloseIcon /> : <CheckIcon />}
              </IconButton>
              <IconButton
                edge="end"
                color="primary"
                onClick={() => handleClickOpen(task, index)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                edge="end"
                color="error"
                onClick={() => deleteTask(index)}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </List>
      <BigDialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <DialogContentText>Update the task below.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Task"
            fullWidth
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditTask} color="success">
            Save
          </Button>
        </DialogActions>
      </BigDialog>
    </>
  );
};

export default TaskList;
