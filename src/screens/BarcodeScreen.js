import React from "react";
import { View, StyleSheet, Text } from "react-native";
import QRCode from "../components/qrCode/QRCode";
import { Button } from "@ui-kitten/components";

const BarcodeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.barcodeContainer}>{/* <QRCode /> */}</View>
      <View style={styles.btns}>
        <Button
          style={styles.btnStop}
          onPress={() => {
            navigation.goBack();
          }}
        >
          Dừng Scan
        </Button>
        <Button style={styles.btnRepeat}>Scan lại</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barcodeContainer: {
    flex: 1,
  },
  btns: {
    flexDirection: "row",
    marginTop: 12,
  },
  btnStop: {
    flex: 1,
    margin: 8,
    backgroundColor: "red",
    borderColor: "red",
  },
  btnRepeat: {
    flex: 1,
    margin: 8,
  },
});

export default BarcodeScreen;
