import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useGlobalContext } from "../../store/contexts/GlobalContext";
import productApi from "../../api/productApi";
import { useNavigation } from "@react-navigation/native";
import { Toast } from "../../utils";

export default function QRCode() {
  const { isShowQr, globalFunc } = useGlobalContext();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    if (data) {
      let res = await productApi.getOneByBarcode(data);
      if (res.isSuccess) {
        navigation.navigate("Details", res.product.id);
      } else {
      }
    }
  };

  if (hasPermission === null) {
    return <></>;
  }
  if (hasPermission === false) {
    return <></>;
  }

  useEffect(() => {
    if (hasPermission == null || hasPermission == false) {
      Toast.error("Yêu cầu truy cập camera");
      globalFunc.setIsShowQr(false);
    }
    return () => {};
  }, [hasPermission]);

  return (
    <>
      {isShowQr && (
        <View style={styles.container}>
          <View style={styles.wrap}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
              <>
                <Button title={"Scan lại"} onPress={() => setScanned(false)} />
                <Button
                  title={"Dừng scan"}
                  onPress={() => {
                    globalFunc.setIsShowQr(false);
                  }}
                />
              </>
            )}
            {!scanned && (
              <Button
                title={"Dừng scan"}
                onPress={() => {
                  globalFunc.setIsShowQr(false);
                }}
              />
            )}
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  wrap: {
    height: 300,
    width: 300,
    marginTop: 300,
  },
});
