import axiosCall from "./index";
import types from "./action-types";

export const setLanguage = (lan = "en") => {
  console.log("lan----->>>", lan);
  const responseType = types.LANGUAGE;
  return axiosCall(responseType, lan);
};
