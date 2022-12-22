// isLoggedIn  localstaorage has token

export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) return true;
  else return false;
};

// doLogin  data is set to local storage

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

// do logout removes data from local tsorage
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

// get current user  (loogged in user)
export const getCurrentUserDetail = () => {
  if (isLoggedIn) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return false;
  }
};
