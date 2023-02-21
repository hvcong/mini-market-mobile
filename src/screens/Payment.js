import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Header from "../components/header/Header";
import RedirectRouter from "../components/RedirectRouter";
import { colors, fontSize, headerHeight } from "../utils/constants";
import {
  Input,
  IndexPath,
  Layout,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import Radio from "../components/Radio";
import PaymentSubmit from "../components/payment/PaymentSubmit";
import DeliveryTime from "../components/payment/DeliveryTime";
import PaymentWays from "../components/payment/PaymentWays";
import SpaceLine from "../components/common/SpaceLine";
import Voucher from "../components/common/Voucher";
import PaymentBill from "../components/payment/PaymentBill";
import DeliveryNote from "../components/payment/DeliveryNote";
import { SafeAreaView } from "react-native-safe-area-context";
import VoucherModal from "../components/modal/VoucherModal";

const Payment = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [isVisibleVoucherModal, setIsVisibleVoucherModal] = useState(false);
  return (
    <SafeAreaView style={styles.wrap}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <RedirectRouter title={"Xem lại giỏ hàng"} navigation={navigation} />
          <View style={styles.body}>
            <Text style={styles.title}>Địa chỉ nhận hàng</Text>

            <View style={styles.form}>
              <Input
                style={styles.input}
                placeholder="Số điện thoại"
                //   caption={"Nhập tối thiểu 5 kí tự"}
              />
              <View style={styles.gender}>
                <Radio label={"Anh"} style={styles.radioItem} />
                <Radio label={"Chị"} style={styles.radioItem} />
              </View>
              <Input style={styles.input} placeholder="Họ và tên đệm" />
              <Input
                style={styles.input}
                placeholder="Tên"
                //   caption={"Nhập tối thiểu 5 kí tự"}
              />
              <View style={styles.inputGroup}>
                <Select
                  selectedIndex={selectedIndex}
                  onSelect={(index) => setSelectedIndex(index)}
                  style={styles.select}
                >
                  <SelectItem title="Option 1" />
                  <SelectItem title="Option 2" />
                  <SelectItem title="Option 3" />
                </Select>
                <Select
                  selectedIndex={selectedIndex}
                  onSelect={(index) => setSelectedIndex(index)}
                  style={[styles.select, { paddingLeft: 24 }]}
                >
                  <SelectItem title="Option 1" />
                  <SelectItem title="Option 2" />
                  <SelectItem title="Option 3" />
                </Select>
              </View>
              <Select
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
                style={styles.select}
              >
                <SelectItem title="Option 1" />
                <SelectItem title="Option 2" />
                <SelectItem title="Option 3" />
              </Select>
              <Input
                style={styles.input}
                placeholder="Số nhà, tên đường"
                //   caption={"Nhập tối thiểu 5 kí tự"}
              />
            </View>
          </View>
          <SpaceLine />
          <DeliveryTime />
          <SpaceLine />
          <PaymentWays />
          <SpaceLine />
          <Voucher
            isVisibleVoucherModal={isVisibleVoucherModal}
            setIsVisibleVoucherModal={setIsVisibleVoucherModal}
          />
          <SpaceLine />
          <PaymentBill />
          <SpaceLine />
          <DeliveryNote />
        </View>
      </ScrollView>
      <View style={styles.submit}>
        <PaymentSubmit />
      </View>
      <VoucherModal
        visible={isVisibleVoucherModal}
        setVisible={setIsVisibleVoucherModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.white,
  },
  container: {
    paddingTop: headerHeight,
    paddingBottom: 72,
  },

  body: {
    paddingHorizontal: 12,
  },
  form: {
    paddingVertical: 12,
  },
  title: {
    fontSize: fontSize.XL,
    textTransform: "uppercase",
    paddingTop: 12,
    fontWeight: "bold",
    color: colors.gray2,
  },

  input: {
    marginBottom: 12,
  },
  gender: {
    flexDirection: "row",
  },
  radioItem: {
    paddingRight: 24,
  },
  inputGroup: {
    flexDirection: "row",
    flex: 1,
  },
  select: {
    flex: 1,
    marginBottom: 12,
  },
  submit: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Payment;
