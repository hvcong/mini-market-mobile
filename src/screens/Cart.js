import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "../components/cart/CartItem";
import Header from "../components/header/Header";
import RedirectRouter from "../components/RedirectRouter";
import { colors, fontSize, headerHeight } from "../utils/constants";
import { Icon } from "@ui-kitten/components";
import SubmitOrder from "../components/cart/SubmitOrder";
import { Shadow } from "react-native-shadow-2";
import Voucher from "../components/common/Voucher";
import SpaceLine from "../components/common/SpaceLine";
import AddToCartModal from "../components/modal/AddToCartModal";
import VoucherModal from "../components/modal/VoucherModal";

const Cart = ({ navigation }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleVoucherModal, setIsVisibleVoucherModal] = useState(false);
  return (
    <SafeAreaView style={styles.wrap}>
      <Header navigation={navigation} />
      <View style={styles.wrap2}>
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <RedirectRouter title={"Giỏ hàng của bạn"} isTitleCenter={true} />
            <View style={styles.body}>
              <Text style={styles.title}>Hàng có sẵn</Text>
              <View style={styles.list}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </View>
              <View style={styles.btnList}>
                <View style={styles.btnWithCartItem}>
                  <Icon
                    name="trash-2-outline"
                    fill={colors.gray2}
                    style={styles.trashIcon}
                  />
                  <Text style={styles.btnWithCartItemText}>
                    Xóa hết giỏ hàng
                  </Text>
                </View>
                <View style={styles.btnWithCartItem}>
                  <Icon
                    name="diagonal-arrow-right-up-outline"
                    fill={colors.gray2}
                    style={styles.trashIcon}
                  />
                  <Text style={styles.btnWithCartItemText}>
                    Tiếp tục mua sắm
                  </Text>
                </View>
              </View>
              <SpaceLine />
              <Voucher setIsVisibleVoucherModal={setIsVisibleVoucherModal} />

              <View style={styles.totalPrice}>
                <Text style={styles.totalPriceLabel}>Tạm tính:</Text>
                <Text style={styles.totalPriceValue}>211.000đ</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.submitOrderContainer}>
          <SubmitOrder navigation={navigation} />
        </View>
        <AddToCartModal
          visible={isVisibleModal}
          setVisible={setIsVisibleModal}
        />
        <VoucherModal
          visible={isVisibleVoucherModal}
          setVisible={setIsVisibleVoucherModal}
        />
      </View>
    </SafeAreaView>
  );
};

const submitOrderHeight = 98;

const styles = StyleSheet.create({
  wrap: {},
  wrap2: {
    backgroundColor: colors.white,
  },
  scroll: {
    marginBottom: submitOrderHeight,
  },
  container: {
    paddingTop: headerHeight,
    position: "relative",
  },
  body: {
    // paddingHorizontal: 12,
  },
  title: {
    fontSize: fontSize.XL,
    textTransform: "uppercase",
    paddingTop: 12,
    fontWeight: "bold",
    color: colors.gray2,
    paddingLeft: 12,
  },
  list: {},
  btnList: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
  },
  btnWithCartItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grayLighter,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  trashIcon: {
    width: 24,
    height: 24,
  },
  btnWithCartItemText: {
    color: colors.gray2,
    paddingLeft: 4,
  },

  totalPrice: {
    flexDirection: "row",
    padding: 12,
    borderTopColor: colors.grayLighter,
    borderTopWidth: 1,
  },
  totalPriceLabel: {
    fontSize: fontSize.XL,
    fontWeight: "bold",
    flex: 1,
  },
  totalPriceValue: {
    fontSize: fontSize.XL,
    fontWeight: "bold",
  },
  submitOrderContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.white,
    // height: submitOrderHeight,
  },
});

export default Cart;
