import { ERROR, IDLE, LOADING, SUCCESS } from "../../enums/storeState";
import { createReducer } from "../../utils/reducers";
import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
} from "../actions/users";

const initialState = {
  data: null,
  error: null,
  state: IDLE,
};

const handlers = {
  [FETCH_USERS]: (state) => {
    return {
      ...state,
      state: LOADING,
    };
  },
  [FETCH_USERS_SUCCESS]: (state, action) => {
    return {
      ...state,
      state: SUCCESS,
      data: action.payload,
    };
  },
  [FETCH_USERS_ERROR]: (state, action) => {
    return {
      ...state,
      state: ERROR,
      error: action.error,
    };
  },
};

export default createReducer(initialState, handlers);
