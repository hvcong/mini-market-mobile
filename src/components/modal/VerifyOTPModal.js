import React from "react";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { Modal } from "react-native";
import { View, StyleSheet } from "react-native";
import { Icon } from "@ui-kitten/components";
import { Pressable } from "react-native";
import { colors, fontSize } from "../../utils/constants";

const VerifyOTPModal = ({ visible, setVisible }) => {
  return (
    <Modal style={styles.modal} visible={visible} transparent>
      <View style={styles.fillLayer}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Để lấy thông tin trước đó vui lòng nhập mã xác thực
          </Text>

          <TextInput style={styles.input} value="123232" />
          <View style={styles.bottom}>
            <Text style={styles.subText}>6 số mã được gửi vào số </Text>
            <Text style={styles.phone}>09283232323</Text>
            <Text style={styles.subText}> còn hiệu lực trong </Text>
            <Text style={styles.time}>00:24</Text>
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
  fillLayer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  container: {
    backgroundColor: colors.white,
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: fontSize.XL,
    fontWeight: "bold",
    marginBottom: 12,
    paddingHorizontal: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: colors.grayLighter,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: "100%",
    textAlign: "center",
    fontSize: 32,
    letterSpacing: 8,
  },
  bottom: {
    paddingVertical: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  subText: {
    color: colors.gray,
  },
  phone: {
    fontWeight: "bold",
    fontSize: fontSize.L,
    paddingLeft: 8,
  },
  time: {
    fontSize: fontSize.L,
    paddingLeft: 8,
    color: colors.green1,
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

export default VerifyOTPModal;
