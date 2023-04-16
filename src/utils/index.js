import { ToastAndroid } from "react-native";

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

export function convertToVND(value) {
  function format1(n, currency) {
    return (
      currency +
      n.toFixed(2).replace(/./g, (c, i, a) => {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
      })
    );
  }

  let str = format1(value, " ") + "";

  return (str && str.slice(0, -3)) + " đ";

  // let num = value || 0;
  // num = Number(num);
  // return num.toLocaleString("it-IT");
}

export const Toast = {
  infor: (text) => {
    ToastAndroid.showWithGravityAndOffset(
      text,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  },
  error: (text) => {
    ToastAndroid.showWithGravityAndOffset(
      text,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  },
};

export function compareDMY(jsDate1, jsDate2) {
  let d1 = jsDate1.getDate();
  let m1 = jsDate1.getMonth();
  let y1 = jsDate1.getFullYear();

  let d2 = jsDate2.getDate();
  let m2 = jsDate2.getMonth();
  let y2 = jsDate2.getFullYear();

  if (y1 == y2 && m2 == m1 && d1 == d2) {
    return 0;
  }

  if (y1 < y2) {
    return -1;
  }

  if (y2 == y1) {
    if (m1 < m2) {
      return -1;
    } else if (m2 == m1) {
      if (d1 < d2) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  }

  return 1;
}

export function sqlToDDmmYYY(date) {
  var myDate = new Date(date);

  let d = myDate.getDate();
  let m = myDate.getMonth() + 1;
  let y = myDate.getFullYear();

  if (d < 10) {
    d = "0" + d;
  }
  if (m < 10) {
    m = "0" + m;
  }

  return d + "/" + m + "/" + y;
}
