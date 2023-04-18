import React, { useState } from "react";
import { Text, TextInput, Touchable, TouchableOpacity } from "react-native";
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
import Footer from "../../components/home/Footer";

const History = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView>
        <View style={styles.wrap}>
          <RedirectRouter
            title="lịch sử mua hàng"
            navigation={navigation}
            isTitleCenter={true}
          />
          <View style={styles.content}>
            <BillBought />
          </View>
        </View>
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
  content: {
    paddingHorizontal: 12,
  },
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
});

export default History;
