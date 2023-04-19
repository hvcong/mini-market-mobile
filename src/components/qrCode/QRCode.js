import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useGlobalContext } from "../../store/contexts/GlobalContext";

export default function QRCode() {
  const { isShowQr } = useGlobalContext();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  //   useEffect(() => {
  //     const getBarCodeScannerPermissions = async () => {
  //       const { status } = await BarCodeScanner.requestPermissionsAsync();
  //       setHasPermission(status === "granted");
  //     };

  //     getBarCodeScannerPermissions();
  //   }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Yêu cầu truy cập camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Không thẻ truy cập camera, vui lòng thử lại</Text>;
  }
  console.log("show", isShowQr);

  return (
    <>
      {isShowQr ? (
        <View style={styles.container}>
          {/* <View style={styles.wrap}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
            {scanned && (
              <Button
                title={"Tap to Scan Again"}
                onPress={() => setScanned(false)}
              />
            )}
            {!scanned && (
              <Button title={"Dừng scan"} onPress={() => setScanned(false)} />
            )}
          </View> */}
        </View>
      ) : (
        <View>
          <Text>Chưa bật qr code</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  wrap: {},
});
