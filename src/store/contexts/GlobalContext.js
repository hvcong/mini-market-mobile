import { createContext, useContext, useState } from "react";
import store from "..";
import authApi from "../../api/authApi";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [state, setState] = useState({
    isLogin: true,
    account: {
      id: "KH0452246",
      firstName: "Lê ",
      lastName: "Phong",
      phonenumber: "0954622233",
      email: "lephong@gmail.com",
      HomeAddressId: 1,
      TypeCustomerId: "TN",
    },
    token: null,
  });

  const [loadingModalState, setLoadingModalState] = useState({
    visible: false,
    label: "Đang tải...",
  });

  // function
  const globalFunc = {
    // login by phone
    login: async (phone, password) => {
      try {
        const res = await authApi.login(phone, password);

        if (!res.isSuccess) {
          console.log("login faild:", res.message);
          return res;
        }

        // logIn oke
        console.log("login oke");

        store.setToken(res.account.accestoken);

        setState({
          ...state,
          account: res.account,
          token: res.account.accestoken,
        });
        return res;
      } catch (error) {
        console.log("login err:", error);
        return {
          isSuccess: false,
        };
      }
    },
    // register by phone
  };

  const GlobalContextData = {
    isLogin: state.isLogin,
    account: state.account,
    token: state.token,
    globalFunc,
    loadingModalState,
    setLoadingModalState,
  };

  return (
    <GlobalContext.Provider value={GlobalContextData}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
export function useGlobalContext() {
  return useContext(GlobalContext);
}
