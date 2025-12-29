export const initState = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "incrementByAmout":
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      throw new Error(`Action type "${action.type}" invalid`);
  }
}

export default reducer;
