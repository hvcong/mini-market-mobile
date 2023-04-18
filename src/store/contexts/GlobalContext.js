import { createContext, useContext, useState } from "react";
import store from "..";
import authApi from "../../api/authApi";
import userApi from "../../api/userApi";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [state, setState] = useState({
    isLogin: true,
    account: {
      id: "KH7638711",
      firstName: null,
      lastName: null,
      phonenumber: "0868283915",
      email: null,
      HomeAddressId: null,
      TypeCustomerId: "BT",
      Bills: [
        {
          id: "Bill1681571119913",
          orderDate: "2023-04-15T15:05:19.000Z",
          cost: 863000,
          type: "success",
          CustomerId: "KH7638711",
          EmployeeId: "NV2976561",
        },
        {
          id: "Bill1681571216036",
          orderDate: "2023-04-15T15:06:56.000Z",
          cost: 209150,
          type: "success",
          CustomerId: "KH7638711",
          EmployeeId: "NV2976561",
        },
      ],
      TypeCustomer: {
        id: "BT",
        name: "Khách hàng thường",
      },
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
    login: async (phone) => {
      setLoadingModalState({
        visible: true,
        label: "Đang đăng nhập...",
      });

      let res = await userApi.getOrCreateByPhone(phone);
      if (res.isSuccess) {
        setState({
          isLogin: true,
          account: res.customer,
        });
      } else {
        console.log("cos loi xay ra");
      }
      setLoadingModalState({
        visible: false,
      });
    },

    logOut: () => {
      setState({
        isLogin: false,
        account: null,
        token: null,
      });
    },
    refresh: async () => {
      setLoadingModalState({
        visible: true,
        label: "Đang cập nhật...",
      });

      let res = await userApi.getOrCreateByPhone(state.account.phonenumber);
      if (res.isSuccess) {
        setState({
          ...state,
          account: res.customer,
        });
      } else {
        console.log("cos loi xay ra");
      }
      setLoadingModalState({
        visible: false,
      });
    },

    setLoadingModalState(visible, title) {
      setLoadingModalState({
        visible: visible,
        title: title || loadingModalState.title,
      });
    },
  };

  const GlobalContextData = {
    isLogin: state.isLogin,
    account: state.account,
    token: state.token,
    loadingModalState,
    globalFunc,
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
