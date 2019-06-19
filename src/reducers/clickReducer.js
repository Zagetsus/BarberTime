import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
  account: null
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        account: action.account
      };
    default:
      return state;
  }
};