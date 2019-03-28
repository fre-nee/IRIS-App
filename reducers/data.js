const INITIAL_STATE = {
  error: "",
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DATA_SUCCESS":
      return { ...state, INITIAL_STATE, user: action.payload };
    case "DATA_FAILED":
      return { error: action.payload };
      
    default:
      return state;
  }
};
