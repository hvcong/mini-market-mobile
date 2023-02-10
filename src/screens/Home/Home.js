import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "@ui-kitten/components";
import Banner from "../../components/home/Banner";
import Category from "../../components/home/Category";
import Group from "../../components/home/Group";
import Footer from "../../components/home/Footer";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrap}>
        <Banner />
        <Category />
        <Group title="Bán chạy nhất" />
        {/* <Group title="Đồ uống" /> */}
        {/* <Group title="Hoa quả" /> */}
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    width: "100%",
  },
  wrap: {
    paddingHorizontal: 16,
    width: "100%",
    flexDirection: "column",
  },
});

export default Home;
