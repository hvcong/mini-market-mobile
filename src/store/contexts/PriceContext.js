import { createContext, useContext, useState } from "react";
import priceHeaderApi from "../../api/priceHeaderApi";
import { useEffect } from "react";

const PriceContext = createContext();

function PriceContextProvider({ children }) {
  const [allPrices, setAllPrices] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 0,
  });

  // function
  const priceFunc = {
    loadAllPrice: async () => {
      let _listPrice = [];
      let res = await priceHeaderApi.getAllOnActive2();

      if (res.isSuccess) {
        let headers = res.headers || [];

        headers.map((header) => {
          let prices = header.Prices || [];

          _listPrice.push(...prices);
        });
      }

      setAllPrices(_listPrice);
      setPagination({
        ...pagination,
        total: _listPrice.length,
      });
    },

    // get by page, limit
    getLimitPrices: (page = 1, limit = 9) => {
      let offset = (page - 1) * limit;

      return allPrices.slice(offset, offset + limit);
    },
  };

  useEffect(() => {
    // load tất cả dòng giá đang sử dụng
    priceFunc.loadAllPrice();

    return () => {};
  }, []);

  const PriceContextData = {
    priceFunc,
    allPrices,
  };

  return (
    <PriceContext.Provider value={PriceContextData}>
      {children}
    </PriceContext.Provider>
  );
}

export default PriceContextProvider;
export function usePriceContext() {
  return useContext(PriceContext);
}
