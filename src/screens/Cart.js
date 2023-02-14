import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartItem from "../components/cart/CartItem";
import Header from "../components/header/Header";
import RedirectRouter from "../components/RedirectRouter";
import { colors, fontSize, headerHeight } from "../utils/constants";
import { Icon } from "@ui-kitten/components";
import SubmitOrder from "../components/cart/SubmitOrder";
import { Shadow } from "react-native-shadow-2";

const Cart = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrap}>
      <Header />
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <RedirectRouter title={"Giỏ hàng của bạn"} />
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
                <Text style={styles.btnWithCartItemText}>Xóa hết giỏ hàng</Text>
              </View>
              <View style={styles.btnWithCartItem}>
                <Icon
                  name="diagonal-arrow-right-up-outline"
                  fill={colors.gray2}
                  style={styles.trashIcon}
                />
                <Text style={styles.btnWithCartItemText}>Tiếp tục mua sắm</Text>
              </View>
            </View>

            <View style={styles.voucherContainer}>
              <View style={styles.voucherTop}>
                <Icon
                  name="credit-card-outline"
                  fill={colors.green}
                  style={styles.voucherIcon}
                />
                <Text style={styles.voucerTitle}>Phiếu mua hàng</Text>
                <Icon
                  name="arrow-ios-forward-outline"
                  fill={colors.green}
                  style={styles.voucherRightIcon}
                />
              </View>
            </View>

            <View style={styles.totalPrice}>
              <Text style={styles.totalPriceLabel}>Tạm tính:</Text>
              <Text style={styles.totalPriceValue}>211.000đ</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.submitOrderContainer}>
        <Shadow distance={24} style={styles.shadow} startColor="#00000021">
          <SubmitOrder navigation={navigation} />
        </Shadow>
      </View>
    </SafeAreaView>
  );
};

const submitOrderHeight = 98;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#fff",
  },
  scroll: {
    marginBottom: submitOrderHeight + 12,
  },
  container: {
    paddingTop: headerHeight,
  },
  body: {
    paddingHorizontal: 12,
  },
  title: {
    fontSize: fontSize.XL,
    textTransform: "uppercase",
    paddingTop: 12,
    fontWeight: "bold",
    color: colors.gray2,
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
  voucherContainer: {
    borderTopWidth: 6,
    borderColor: "#ddd",
    marginHorizontal: -12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
  },
  voucherTop: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  voucherIcon: {
    width: 28,
    height: 28,
  },
  voucerTitle: {
    flex: 1,
    fontSize: fontSize.XL,
    color: colors.green,
    paddingLeft: 8,
  },
  voucherRightIcon: {
    width: 24,
    height: 24,
  },
  totalPrice: {
    flexDirection: "row",
    paddingVertical: 12,
    marginHorizontal: -12,
    paddingHorizontal: 12,
    borderBottomColor: "#ddd",
    borderBottomWidth: 6,
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
    height: submitOrderHeight,
  },
  shadow: {
    width: "100%",
  },
});

export default Cart;
