import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors, fontSize } from "../../utils/constants";

const PaymentBill = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin hóa đơn</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Tiền hàng:</Text>
        <Text style={styles.value}>160.000đ</Text>
      </View>
      <View style={[styles.row, styles.voucherApply]}>
        <Text style={[styles.label, styles.voucherLabel]}>Voucher: -10%</Text>
        <Text style={[styles.value, styles.voucherValue]}>-50.000đ</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.label, styles.totalLabel]}>Tổng đơn hàng:</Text>
        <Text style={[styles.value, styles.totalValue]}>164.000đ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  title: {
    fontSize: fontSize.XL,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.gray2,
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  label: {},
  value: {},
  voucherLabel: {
    color: colors.green,
    fontSize: fontSize.XL,
  },
  voucherValue: {
    color: colors.green,
  },
  totalLabel: {
    fontSize: fontSize.XL,
    fontWeight: "bold",
  },
  totalValue: {
    fontWeight: "bold",
    fontSize: fontSize.XL,
  },
});

export default PaymentBill;
