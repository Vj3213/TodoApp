const onVisibilityFilterSelected = visibilityFilter => {
  return {
    type: "VISIBILITY_FILTER",
    visibilityFilter: visibilityFilter
  };
};

export default onVisibilityFilterSelected;
