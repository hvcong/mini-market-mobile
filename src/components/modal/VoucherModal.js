import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  TextInput,
  Text,
  Pressable,
} from "react-native";
import { colors, fontSize } from "../../utils/constants";
import { Icon } from "@ui-kitten/components";

const VoucherModal = ({ visible, setVisible }) => {
  return (
    <Modal
      style={styles.modal}
      transparent
      visible={visible}
      animationType="slide"
    >
      <View style={styles.wrap}>
        <View style={styles.container}>
          <Text style={styles.title}>Dùng phiếu mua hàng</Text>
          <View style={styles.content}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Phiếu mua hàng" />
              <Text style={[styles.btn, styles.btnEnalbe]}>Sử dụng</Text>
            </View>
            <Text style={styles.label}>Voucher mua hàng của bạn</Text>
            <View style={styles.voucherInfor}>
              <Text style={styles.voucherValue}>- 10%</Text>
              <View style={styles.voucherRight}>
                <Text style={styles.voucherDescription}>
                  Giảm 10% tối đa cho đơn hàng lần đầu tại ứng dụng
                </Text>
                <Text style={styles.expiredTime}>
                  Hết hạn: 18/2/2032 (còn 4 ngày)
                </Text>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.closeIconContainer}
            onPress={() => {
              setVisible(false);
            }}
          >
            <Icon
              name="close-outline"
              fill={colors.gray}
              style={styles.closeIcon}
            />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {},
  wrap: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  container: {
    backgroundColor: colors.white,
    marginTop: "auto",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingBottom: 32,
  },
  title: {
    textAlign: "center",
    paddingVertical: 12,
    fontSize: fontSize.XXL,
    fontWeight: "bold",
    color: colors.gray2,
    borderBottomColor: colors.gray,
    borderBottomWidth: 2,
  },
  content: {
    padding: 12,
    paddingTop: 24,
  },
  inputContainer: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.grayLighter,
  },
  input: {
    flex: 1,
    fontSize: fontSize.XL,
    paddingHorizontal: 12,
  },
  btn: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grayLighter,
    color: colors.gray,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 12,
  },
  btnEnalbe: {
    borderColor: colors.green,
    color: colors.white,
    backgroundColor: colors.green2,
  },
  label: {
    fontSize: fontSize.XL,
    paddingVertical: 12,
  },
  voucherInfor: {
    borderWidth: 2,
    borderColor: colors.green,
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    paddingBottom: 32,
  },
  voucherValue: {
    width: 64,
    height: 64,
    backgroundColor: colors.grayLighter,
    color: colors.green2,
    fontWeight: "bold",
    borderRadius: 4,
    textAlign: "center",
    fontSize: fontSize.XXL,
    lineHeight: 64,
  },
  voucherRight: {
    flex: 1,
    paddingLeft: 12,
  },
  voucherDescription: {
    paddingBottom: 12,
    fontSize: fontSize.L,
  },
  expiredTime: {
    color: colors.red,
    fontSize: fontSize.M,
  },
  closeIconContainer: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
});

export default VoucherModal;
