const isLoginReducer = (state = false, action) => {
  switch (actions.type) {
    case "LOGIN":
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;
