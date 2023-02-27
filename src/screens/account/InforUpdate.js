import React from "react";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header/Header";
import Radio from "../../components/Radio";
import RedirectRouter from "../../components/RedirectRouter";
import {
  backgroundColors,
  colors,
  fontSize,
  headerHeight,
} from "../../utils/constants";

const InforUpdate = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.content}>
            <RedirectRouter
              title="Thông tin tài khoản"
              navigation={navigation}
              isTitleCenter={true}
            />
            <View style={styles.body}>
              <View style={styles.row}>
                <Radio label="Anh" setSelected={false} style={styles.radio} />
                <Radio label="Chị" setSelected={false} style={styles.radio} />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Họ và tên</Text>
                <TextInput style={styles.input} value={"Hoang van cong"} />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Số điện thoại</Text>
                <Text style={[styles.input, styles.disableInput]}>
                  0868283915
                </Text>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput style={styles.input} value="hvcong@gmail.com" />
              </View>
              <Text style={styles.btnSave}>Lưu chỉnh sửa</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: backgroundColors.gray,
  },
  content: {
    marginTop: headerHeight,
  },
  body: {
    paddingHorizontal: 12,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: "row",
  },
  radio: {
    paddingRight: 24,
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grayLighter,
    paddingTop: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    position: "relative",
    marginTop: 12,
  },
  inputLabel: {
    position: "absolute",
    left: 8,
    top: -10,
    backgroundColor: colors.white,
    color: colors.gray1,
    paddingHorizontal: 8,
  },
  input: {
    fontSize: fontSize.L,
    color: colors.gray2,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  disableInput: {
    color: colors.gray,
    paddingTop: 4,
  },
  btnSave: {
    backgroundColor: colors.green1,
    paddingVertical: 12,
    color: colors.white,
    textAlign: "center",
    fontSize: fontSize.L,
    textTransform: "uppercase",
    borderRadius: 4,
    marginVertical: 12,
  },
});

export default InforUpdate;
