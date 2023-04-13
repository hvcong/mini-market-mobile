import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "@ui-kitten/components";
import Banner from "../../components/home/Banner";
import Category from "../../components/home/Category";
import Group from "../../components/home/Group";
import Footer from "../../components/home/Footer";
import Header from "../../components/header/Header";
import {
  backgroundColors,
  bottomTabHeight,
  colors,
  headerHeight,
} from "../../utils/constants";
import AddToCartModal from "../../components/modal/AddToCartModal";

const Home = ({ navigation }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  // useEffect()

  return (
    <SafeAreaView style={{ backgroundColor: colors.green2 }}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <ScrollView style={styles.wrap}>
          <View style={styles.content}>
            <Banner navigation={navigation} />
            <Category />
            <Group
              title="các sản phẩm"
              type="nomal"              
              backgroundColor="#eee"
              navigation={navigation}
            />                     
            <Footer />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
  },
  wrap: {
    width: "100%",
    
  },
  content: {
    width: "100%",
    paddingTop: headerHeight + 12,
    flex:1
  },
});

export default Home;
