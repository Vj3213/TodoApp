const initialState = {
  itemList: []
};

const todoReducer = (state = initialState, action) => {
  const { itemList } = state;

  switch (action.type) {
    case "ADD_TODO":
      const { key, value } = action.payload;
      return {
        ...state,
        itemList: [
          ...state.itemList,
          {
            key,
            value,
            isCompleted: false
          }
        ]
      };

    case "DELETE_TODO":
      return {
        ...state,
        itemList: state.itemList.filter(item => !(item.key == action.key))
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        itemList: state.itemList.filter(item => !item.isCompleted)
      };

    case "UPDATE_TODO":
      return {
        ...state,
        itemList: state.itemList.map(item => {
          if (item.key === action.key) {
            return { ...item, isCompleted: !item.isCompleted };
          }

          return item;
        })
      };

    default:
      return state;
  }
};

export default todoReducer;
