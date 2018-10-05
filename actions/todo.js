const addTodo = data => {
  return {
    type: "ADD_TODO",
    payload: data
  };
};

const removeTodo = key => {
  return {
    type: "DELETE_TODO",
    key: key
  };
};

const updateTodo = item => {
  return {
    type: "UPDATE_TODO",
    key: item.key,
    value: item.value
  };
};

const onClearCompleted = () => {
  return {
    type: "CLEAR_COMPLETED"
  };
};

export { addTodo, removeTodo, updateTodo, onClearCompleted };
