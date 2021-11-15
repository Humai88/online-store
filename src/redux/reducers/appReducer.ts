import * as types from "../actions/types";
import { AppActionTypes } from "../actions/appActions";

const initialState: AppStateType = {
  status: "idle",
};

export const appReducer = (
  state = initialState,
  action: AppActionTypes
): AppStateType => {
  switch (action.type) {
    case types.SET_STATUS:
      return { ...state, status: action.payload.status };

    default:
      return state;
  }
};

// Types
export type AppStateType = {
  status: RequestStatusType;
};
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";
