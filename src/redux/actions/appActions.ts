import { Category } from "../../grapgQL/CategoriesResponseType";
import { RequestStatusType } from "../reducers/appReducer";
import * as types from "./types";

export const setAppStatusAC = (status: RequestStatusType) => {
  return { type: types.SET_STATUS, payload: { status } } as const;
};

// Разобраться здесь

export type AppActionTypes = ReturnType<typeof setAppStatusAC>;
