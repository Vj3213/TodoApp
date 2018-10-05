const initialState = {
  visibilityFilter: "ALL"
};

const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VISIBILITY_FILTER":
      return {
        visibilityFilter: action.visibilityFilter
      };

    default:
      return state;
  }
};

export default visibilityFilterReducer;
