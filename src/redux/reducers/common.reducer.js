import types from "../actions/action-types";

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_USERS:
      return {
        ...state,
        language: action.updatePayload || "en",
      };

    default:
      return state;
  }
};
