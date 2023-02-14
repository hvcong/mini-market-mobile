import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Icon } from "@ui-kitten/components";
import { colors, fontSize } from "../utils/constants";

const RedirectRouter = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={
          navigation
            ? () => navigation.goBack()
            : () => {
                console.warn("Vui long truyen navigation");
              }
        }
      >
        <Icon
          fill={colors.black}
          name="arrow-ios-back-outline"
          style={styles.iconBack}
        />
      </Pressable>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 4,
  },
  iconBack: {
    width: 32,
    height: 32,
    marginLeft: 4,
  },
  right: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: fontSize.XXL,
    fontWeight: "bold",
  },
});

export default RedirectRouter;
