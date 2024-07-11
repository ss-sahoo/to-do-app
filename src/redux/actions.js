export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: { text: task, completed: false },
});

export const deleteTask = (index) => ({
  type: "DELETE_TASK",
  payload: index,
});

export const editTask = (index, newTask) => ({
  type: "EDIT_TASK",
  payload: { index, newTask },
});

export const toggleTask = (index) => ({
  type: "TOGGLE_TASK",
  payload: index,
});
