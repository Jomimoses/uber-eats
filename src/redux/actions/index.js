/* eslint-disable consistent-return */

export default function axiosCall(responseType, data) {
  return async (dispatch) => {
    dispatch({ type: responseType, updatePayload: data });
  };
}
