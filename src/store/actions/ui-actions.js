export const uiActionsTypes = {
  SHOW_ADD_MODAL: "SHOW_ADD_MODAL",
  HIDE_ADD_MODAL: "HIDE_ADD_MODAL",

  SHOW_CLEAR_MODAL: "SHOW_CLEAR_MODAL",
  HIDE_CLEAR_MODAL: "HIDE_CLEAR_MODAL",
};

export const uiActionsCreators = {
  SHOW_ADD_MODAL: () => {
    return {
      type: uiActionsTypes.SHOW_ADD_MODAL,
    };
  },
  HIDE_ADD_MODAL: () => {
    return {
      type: uiActionsTypes.HIDE_ADD_MODAL,
    };
  },
  SHOW_CLEAR_MODAL: () => {
    return {
      type: uiActionsTypes.SHOW_CLEAR_MODAL,
    };
  },
  HIDE_CLEAR_MODAL: () => {
    return {
      type: uiActionsTypes.HIDE_CLEAR_MODAL,
    };
  },
};
