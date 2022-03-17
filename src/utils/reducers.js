export const createReducer = (initialState, handlers) => {
  return (state, action) => {
    if (!state) {
      state = initialState;
    }
    if (action?.type && handlers.hasOwnProperty(action?.type)) {
      return handlers[action?.type](state, action);
    }

    return state;
  };
};
