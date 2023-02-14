import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Icon } from "@ui-kitten/components";
import {
  backgroundColors,
  btnColors,
  colors,
  fontSize,
  headerHeight,
} from "../../utils/constants";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView style={styles.wrap}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />
          <LinearGradient
            colors={[btnColors.greenLighter, btnColors.green]}
            style={styles.location}
          >
            <Text style={styles.locationLabel}>Giao tại</Text>
            <Text style={styles.locationValue}>TP.HCM</Text>
          </LinearGradient>
          <LinearGradient
            style={styles.payment}
            colors={[btnColors.greenLighter, btnColors.green]}
          >
            <Icon
              fill={colors.white}
              name="shopping-cart-outline"
              style={styles.cartIcon}
            />
            <Text style={styles.paymentLabel}>Thanh toán</Text>
          </LinearGradient>
        </View>
        <View style={styles.bottom}>
          <View style={styles.menuBar}>
            <Icon
              fill={colors.green}
              name="menu-outline"
              style={styles.menuBarIcon}
            />
            <Text style={styles.menuText}>MENU</Text>
          </View>
          <View style={styles.searchContainer}>
            <Icon
              fill={colors.gray}
              name="search-outline"
              style={styles.searchIcon}
            />
            <Text style={styles.searchPlace}>Giao nhanh, đơn gì cũng giao</Text>
            <Icon
              fill={colors.gray1}
              name="mic-outline"
              style={styles.micIcon}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: { position: "absolute", top: 0, left: 0, right: 0, zIndex: 100 },
  container: {
    paddingHorizontal: 12,
    backgroundColor: backgroundColors.greenLighter,
    height: headerHeight,
    marginBottom: 12,
    justifyContent: "center",
  },
  top: {
    flexDirection: "row",
  },
  logo: {
    width: 40,
    height: 40,
  },
  location: {
    borderWidth: 1,
    borderColor: "#bbb",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginLeft: "auto",
  },

  locationLabel: {
    fontSize: fontSize.S,
    color: "white",
  },
  locationValue: {
    fontWeight: "bold",
    color: "white",
  },
  payment: {
    borderWidth: 1,
    borderColor: "#bbb",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  cartIcon: {
    width: 32,
    height: 32,
  },
  paymentLabel: {
    color: "white",
  },
  bottom: {
    flexDirection: "row",
    backgroundColor: "#eee",
    height: 52,
    marginTop: 12,
    borderRadius: 4,
    borderColor: "#bbb",
  },
  menuBar: {
    borderRadius: 4,
    borderColor: "#bbb",
    borderWidth: 1,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c8e0cd",
  },
  menuBarIcon: {
    width: 32,
    height: 32,
  },
  menuText: {
    fontSize: fontSize.S,
    fontWeight: "bold",
    color: colors.green,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  searchIcon: {
    width: 44,
    height: 24,
  },
  searchPlace: {
    flex: 1,
    color: colors.gray,
    fontSize: fontSize.L,
  },
  micIcon: {
    width: 44,
    height: 32,
  },
});

export default Header;
