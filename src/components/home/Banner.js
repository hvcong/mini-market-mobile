import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Button } from "@ui-kitten/components";

const Banner = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Text category="h2" style={styles.title}>
            35% OFF
          </Text>
          <Text category="s2" style={styles.subtitle}>
            mini supermarke mini supermarket tmini supermarket
          </Text>
          <Button
            size="small"
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Chi tiết
          </Button>
        </View>
        <View style={styles.right}>
          <Image
            source={require("../../../assets/home_banner.jpg")}
            style={styles.bannerImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#82b478",
    borderRadius: 12,
    alignItems: "center",
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "white",
    marginBottom: 12,
  },
  left: {
    flex: 1,
    paddingRight: 12,
  },
  right: {
    flex: 1,
  },
  bannerImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderRadius: 6,
  },
});

export default Banner;
