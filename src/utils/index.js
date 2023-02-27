export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateSdt = (sdt) => {
  return sdt.trim().match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g);
};

export const validatePassword = (pwd) => {
  return String(pwd).trim().length > 6;
};
