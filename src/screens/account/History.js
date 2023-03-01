import React, { useState } from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header/Header";
import BillBought from "../../components/history/BillBought";
import ProductBought from "../../components/history/ProductBought";
import RedirectRouter from "../../components/RedirectRouter";
import {
  backgroundColors,
  colors,
  fontSize,
  headerHeight,
} from "../../utils/constants";

const History = ({ navigation }) => {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.wrap}>
            <RedirectRouter
              title="Đơn hàng từng mua"
              navigation={navigation}
              isTitleCenter={true}
            />
            <View style={styles.content}>
              <View style={styles.tabContainer}>
                <Text
                  onPress={() => setTabIndex(1)}
                  style={[styles.tabItem, tabIndex == 1 && styles.tabActive]}
                >
                  Sản phẩm từng mua
                </Text>
                <Text
                  onPress={() => setTabIndex(2)}
                  style={[styles.tabItem, tabIndex == 2 && styles.tabActive]}
                >
                  Lịch sử đơn hàng
                </Text>
              </View>
              <View style={styles.body}>
                {tabIndex == 1 ? <ProductBought /> : <BillBought />}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: backgroundColors.gray,
  },
  wrap: {
    marginTop: headerHeight,
  },
  content: {},
  tabContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 12,
    fontSize: fontSize.L,
    textAlign: "center",
  },
  tabActive: {
    color: colors.green1,
    fontWeight: "bold",
    backgroundColor: colors.grayLighter,
  },
  body: {},
});

export default History;
