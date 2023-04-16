import React, { useState } from "react";
import { useEffect } from "react";
import promotionApi from "../../api/promotionApi";
import { useGlobalContext } from "./GlobalContext";

const OrderContext = React.createContext();

function OrderProvider({ children }) {
  const [listOrders, setListOrders] = useState([]);
  const [refreshPromotion, setRefreshPromotion] = useState(false);
  const [amountMoney, setAmountMoney] = useState({
    subTotal: 0,
    discountOnBill: 0,
    discountByVoucher: 0,
    total: 0,
  });
  const { account } = useGlobalContext();
  let customerType = (account && account.TypeCustomerId) || "BT";

  const [voucherUsed, setVoucherUsed] = useState(null);
  const [MPlist, setMPlist] = useState([]);
  const [MPused, setMPused] = useState(null);

  useEffect(() => {
    if (refreshPromotion) {
      calcPP();
    }

    return () => {};
  }, [refreshPromotion]);

  useEffect(() => {
    if (listOrders) {
      calcMoney();
    }

    return () => {};
  }, [listOrders, voucherUsed, MPlist, voucherUsed]);

  useEffect(() => {
    loadMPList();
    return () => {};
  }, [customerType]);

  function calcPP() {
    let _listItemPP = [];

    let _listOrderNotPP = listOrders.filter((item) => !item.isPP);

    _listOrderNotPP.map((cartItem) => {
      let PPs = cartItem.ProductUnitType.ProductPromotions || [];
      let amount = cartItem.amount;

      if (PPs.length == 0) return;

      PPs.map((ppItem) => {
        let minQuantity = ppItem.minQuantity;
        if (amount < minQuantity) return;
        let giftProduct = ppItem.GiftProduct;
        let imageUri = giftProduct.ProductUnitType.Product.images[0].uri;
        let amoutGift =
          Math.floor(amount / ppItem.minQuantity) * giftProduct.quantity;

        if (amoutGift < 0) return;

        let _newCartItem = {
          ...giftProduct,
          price: 0,
          amount: amoutGift,
          isPP: true,
          PP: ppItem,
        };

        _listItemPP.push(_newCartItem);
      });
    });

    setListOrders([..._listOrderNotPP, ..._listItemPP]);
    setRefreshPromotion(false);
    // have pp
  }

  function calcMoney() {
    let subTotal = 0;
    let discountOnBill = 0;
    let discountByVoucher = 0;
    let total = 0;

    let _listOrderNotPP = listOrders.filter((item) => !item.isPP);

    _listOrderNotPP.map((cartItem) => {
      let DRP = cartItem.ProductUnitType.DiscountRateProduct;
      let price = cartItem.price;
      if (DRP) {
        price = (price * (100 - DRP.discountRate)) / 100;
      }
      subTotal += price * cartItem.amount;
    });

    // lấy mp và tính discount
    let _MPused = null;
    (MPlist || []).map((MPitem) => {
      // tính discountByMP
      let minCost = MPitem.minCost;
      let type = MPitem.type;
      let discountMoney = MPitem.discountMoney;
      let discountRate = MPitem.discountRate;
      let maxMoneyDiscount = MPitem.maxMoneyDiscount;
      let availableBudget = MPitem.availableBudget;

      if (minCost <= subTotal) {
        // giảm bằng tiền
        if (type == "discountMoney") {
          // lấy cái giảm giá nhiều nhát
          if (discountMoney <= availableBudget) {
            if (discountMoney > discountOnBill) {
              _MPused = MPitem;
              discountOnBill = discountMoney;
            }
          }
        }

        // giảm bằng %
        if (type == "discountRate") {
          let sum = discountRate * subTotal;
          if (sum > maxMoneyDiscount) {
            sum = maxMoneyDiscount;
          }

          // lấy cái giảm giá nhiều nhát
          if (sum <= availableBudget) {
            if (sum > discountOnBill) {
              discountOnBill = sum;
              _MPused = MPitem;
            }
          }
        }
      }
    });

    if (_MPused) {
      setMPused(_MPused);
    }

    // tính discountByVoucher
    if (voucherUsed) {
      if (voucherUsed.type == "discountMoney") {
        discountByVoucher = voucherUsed.discountMoney;
      }

      if (voucherUsed.type == "discountRate") {
        let maxDiscountMoney = voucherUsed.maxDiscountMoney;

        let discount = 0;

        discount = (voucherUsed.discountRate / 100) * costBeforeDiscountVoucher;
        if (discount <= maxDiscountMoney) {
          discountByVoucher = discount;
        } else {
          discountByVoucher = maxDiscountMoney;
        }
      }
    }

    let costBeforeDiscountVoucher = subTotal - discountOnBill;
    if (costBeforeDiscountVoucher < discountByVoucher) {
      discountByVoucher = costBeforeDiscountVoucher;
    }

    total = costBeforeDiscountVoucher - discountByVoucher;

    console.log(subTotal, discountOnBill, discountByVoucher, total);
    setAmountMoney({
      subTotal,
      discountOnBill,
      discountByVoucher,
      total,
    });
  }

  async function loadMPList() {
    let res = await promotionApi.getAllMPOnActiveByCutomerType(customerType);
    if (res.isSuccess) {
      let _MPlist = [];
      res.promotions.map((header) => {
        header.MoneyPromotions.map((mp) => {
          _MPlist.push(mp);
        });
      });

      setMPlist(_MPlist || []);
    } else {
      setMPlist([]);
    }
  }

  const addToCart = (item, quantity = 1) => {
    if (!isExistInCart(item.id)) {
      setListOrders([...listOrders, { ...item, amount: quantity }]);
      setRefreshPromotion(true);
    }
  };
  const isExistInCart = (priceId) => {
    let isExist = false;
    listOrders.map((item) => {
      if (item.id == priceId) isExist = true;
    });
    return isExist;
  };

  const increaseQuantity = (priceId) => {
    let _newList = listOrders.map((item) => {
      if (item.id == priceId) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });
    setListOrders(_newList);
    setRefreshPromotion(true);
  };
  const decreaseQuantity = (priceId) => {
    let _newList = listOrders
      .map((item) => {
        if (item.id == priceId) {
          let amount = item.amount - 1;
          if (amount <= 0) {
            return null;
          }
          return {
            ...item,
            amount: amount,
          };
        }
        return item;
      })
      .filter((item) => item);
    setListOrders(_newList);
    setRefreshPromotion(true);
  };

  const orderFunc = {
    isExistInCart,
    increaseQuantity,
    addToCart,
    decreaseQuantity,
    setVoucherUsed,
  };

  const orderContextData = {
    listOrders,
    orderFunc,
    amountMoney,
    voucherUsed,
    customerType,
  };

  return (
    <OrderContext.Provider value={orderContextData}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderProvider };