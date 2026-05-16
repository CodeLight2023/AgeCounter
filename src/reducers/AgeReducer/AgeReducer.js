export const ageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ONE_TO_AGE":
      return state + 1;
    case "ADD_FIVE_TO_AGE":
      return state + 5;
    case "ADD_NUM_TO_AGE":
      return state + action.num;
    default:
      return state;
  }
};
