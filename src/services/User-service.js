// available everything useful for calling server

import { myAxios } from "./Helper";

export const signUp = (user) => {
  return myAxios
    .post("/api/v1/auth/register", user)
    .then((response) => response.data);
};

export const loginUser = (loginDetails) => {
  return myAxios
    .post("/api/v1/auth/login", loginDetails)
    .then((response) => response.data);
};
// aysnchronous function
// promise
