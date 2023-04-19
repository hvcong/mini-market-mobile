import { createContext, useContext, useState } from "react";
import priceHeaderApi from "../../api/priceHeaderApi";
import { useEffect } from "react";
import { useGlobalContext } from "./GlobalContext";

const PriceContext = createContext();

function PriceContextProvider({ children }) {
  const [allPrices, setAllPrices] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 0,
  });

  const [allPricePPList, setAllPricePPList] = useState([]);
  const [allPriceDRPList, setAllPriceDRPList] = useState([]);
  const [priceListSearch, setPriceListSearch] = useState([]);

  const { account } = useGlobalContext();

  const priceFunc = {
    getLimitPrices,
    getLimitDRPList,
    getLimitPPList,
    getPriceById,
    searchByProductName,
  };

  // function
  async function loadAllPrices() {
    let _listPrice = [];
    let _listPriceDRP = [];
    let _listPricePP = [];
    let res = await priceHeaderApi.getAllOnActive2();

    if (res.isSuccess) {
      let headers = res.headers || [];

      headers.map((header) => {
        let prices = header.Prices || [];
        _listPrice.push(...prices);
      });
    }

    // load pp
    _listPrice.map((priceLine) => {
      let PPs = priceLine.ProductUnitType.ProductPromotions || [];
      let DRP = priceLine.ProductUnitType.DiscountRateProduct;

      if (PPs.length > 0) {
        _listPricePP.push(priceLine);
      }

      if (DRP) {
        _listPriceDRP.push(priceLine);
      }
    });

    setAllPriceDRPList(_listPriceDRP);
    setAllPricePPList(_listPricePP);
    setAllPrices(_listPrice);
    setPagination({
      ...pagination,
      total: _listPrice.length,
    });
  }

  // get by page, limit
  function getLimitPrices(quantity = 9) {
    return allPrices.slice(0, quantity);
  }

  function getLimitPPList(quantity = 9) {
    return allPricePPList.slice(0, quantity);
  }

  function getLimitDRPList(quantity = 9) {
    return allPriceDRPList.slice(0, quantity);
  }

  function getPriceById(id) {
    return allPrices.filter((item) => item.id == id)[0];
  }

  function searchByProductName(productName) {
    let _listFounds = [];
    if (productName) {
      _listFounds = allPrices.filter((item) => {
        let product = item.ProductUnitType.Product;
        return product.name.includes(productName);
      });
    }

    setPriceListSearch(_listFounds);
  }
  useEffect(() => {
    if (account) {
      // load tất cả dòng giá đang sử dụng
      loadAllPrices();
    }

    return () => {};
  }, [account]);

  const PriceContextData = {
    priceFunc,
    allPrices,
    allPriceDRPList,
    allPricePPList,
    priceListSearch,
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
