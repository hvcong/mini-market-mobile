import { createContext, useContext, useState } from "react";
import store from "..";
import authApi from "../../api/authApi";
import userApi from "../../api/userApi";
import cateApi from "../../api/cateApi";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  //dataTest
  const [state, setState] = useState({
    isLogin: true,
    account: {
      id: "KH0868283915",
      firstName: "Hoàng Văn",
      lastName: "Việt",
      phonenumber: "0868283915",
      email: null,
      HomeAddressId: 27,
      TypeCustomerId: "BT",
      Bills: [
        {
          id: "Bill1683886533998",
          orderDate: "2023-05-12T10:15:33.000Z",
          isDDH: false,
          cost: 698000,
          type: "success",
          CustomerId: "KH0868283915",
          EmployeeId: "NV2976561",
        },
        {
          id: "Bill1684295761080",
          orderDate: "2023-05-17T03:56:01.000Z",
          isDDH: false,
          cost: 192600,
          type: "success",
          CustomerId: "KH0868283915",
          EmployeeId: "NV2976561",
        },
        {
          id: "Bill1684296533008",
          orderDate: "2023-05-17T04:08:53.000Z",
          isDDH: false,
          cost: 0,
          type: "pending",
          CustomerId: "KH0868283915",
          EmployeeId: null,
        },
        {
          id: "Bill1684296753758",
          orderDate: "2023-05-17T04:12:33.000Z",
          isDDH: false,
          cost: 107000,
          type: "pending",
          CustomerId: "KH0868283915",
          EmployeeId: null,
        },
        {
          id: "Bill1684298583690",
          orderDate: "2023-05-17T04:43:03.000Z",
          isDDH: false,
          cost: 548000,
          type: "pending",
          CustomerId: "KH0868283915",
          EmployeeId: null,
        },
      ],
      TypeCustomer: {
        id: "BT",
        name: "Khách hàng thường",
      },
      HomeAddress: {
        id: 27,
        homeAddress: "45",
        WardId: "11581",
        Ward: {
          id: "11581",
          name: "Thị trấn An Dương",
          DistrictId: "312",
          District: {
            id: "312",
            name: "Huyện An Dương",
            CityId: "31",
            City: {
              id: "31",
              name: "Thành phố Hải Phòng",
            },
          },
        },
      },
    },

    token: null,
  });

  const [categories, setCategories] = useState([]);
  const [isShowQr, setIsShowQr] = useState(false);

  const [loadingModalState, setLoadingModalState] = useState({
    visible: false,
    label: "Đang tải...",
  });

  // function
  const globalFunc = {
    setIsShowQr,
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
    categories,
    isShowQr,
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
