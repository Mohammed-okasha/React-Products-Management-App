import { uiActionsTypes } from "../actions/ui-actions";

const { SHOW_ADD_MODAL, HIDE_ADD_MODAL, SHOW_CLEAR_MODAL, HIDE_CLEAR_MODAL } =
  uiActionsTypes;

const uiState = {
  addModalIsShown: false,
  clearModalIsShown: false,
};

const uiReducer = (state = uiState, action) => {
  if (action.type === SHOW_ADD_MODAL) {
    return {
      addModalIsShown: true,
      clearModalIsShown: state.clearModalIsShown,
    };
  }
  if (action.type === HIDE_ADD_MODAL) {
    return {
      addModalIsShown: false,
      clearModalIsShown: state.clearModalIsShown,
    };
  }
  if (action.type === SHOW_CLEAR_MODAL) {
    return {
      addModalIsShown: state.addModalIsShown,
      clearModalIsShown: true,
    };
  }
  if (action.type === HIDE_CLEAR_MODAL) {
    return {
      addModalIsShown: state.addModalIsShown,
      clearModalIsShown: false,
    };
  }

  return state;
};

export default uiReducer;
