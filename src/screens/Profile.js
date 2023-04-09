import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Category from "../components/home/Category";
import { SafeAreaView } from "react-native";
import Header from "../components/header/Header";
import { colors, headerHeight } from "../utils/constants";
import Group from "../components/home/Group";
import AddToCartModal from "../components/modal/AddToCartModal";

const Profile = ({ navigation }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  return (
    <SafeAreaView style={{ backgroundColor: colors.green2 }}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <ScrollView style={styles.promotion}>
          <View>
            <Group
              title="Khuyến mãi trên sản phẩm"
              type="special"
              setIsVisibleModal={setIsVisibleModal}
              backgroundColor="#d3db76"
            />
            <TouchableOpacity
              style={styles.more}
              onPress={() => {
                console.log("go to product promotion");
              }}
            >
              <Text> xem thêm {" >"}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Group
              title="Khuyến mãi giảm giá"
              type="special"
              setIsVisibleModal={setIsVisibleModal}
              backgroundColor="#d3db76"
            />
            <TouchableOpacity
              style={styles.more}
              onPress={() => {
                console.log("go to discount promotion");
              }}
            >
              <Text> xem thêm {" >"}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Group
              title="Khuyến mãi quà tặng"
              type="special"
              setIsVisibleModal={setIsVisibleModal}
              backgroundColor="#d3db76"
            />
            <TouchableOpacity
              style={styles.more}
              onPress={() => {
                console.log("go to gift promotion");
              }}
            >
              <Text> xem thêm {" >"}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <AddToCartModal visible={isVisibleModal} setVisible={setIsVisibleModal} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  promotion: {
    marginTop: headerHeight + 32,
  },
  more: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    backgroundColor: "#eee",
  },
});

export default Profile;
