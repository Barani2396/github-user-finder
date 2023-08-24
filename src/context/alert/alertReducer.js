import { SET_ALERT, HIDE_ALERT, REMOVE_ALERT } from '../type';

const alertReducer = (state, action) => {
  switch (action.type) {
    case HIDE_ALERT:
      return {
        ...state,
        visible: false,
      };
    case SET_ALERT:
      return {
        ...state,
        visible: true,
        meta: action.payload,
      };

    case REMOVE_ALERT:
      return {
        ...state,
        visible: false,
        meta: null,
      };

    default:
      return state;
  }
};

export default alertReducer;
