const initialState: any = {
  initialized: false, // transfer to succesful succesful page
  error: false, // show error page
};

export const cartReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case "setInitialized":
      return { ...state, initialized: action.initialized };

    case "setError":
      return { ...state, error: action.error };

    default:
      return state;
  }
};
