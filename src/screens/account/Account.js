import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Icon } from "@ui-kitten/components";
import Header from "../../components/header/Header";
import {
  backgroundColors,
  colors,
  fontSize,
  headerHeight,
} from "../../utils/constants";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VerifyOTPModal from "../../components/modal/VerifyOTPModal";

const Account = ({ navigation }) => {
  const [phone, setPhone] = useState("0868283915");
  const isLogin = false;
  const [isShowVerifyModal, setIsShowVerifyModal] = useState(false);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.infor}>
              <Text style={styles.title}>Thông tin cá nhân</Text>
              <View style={styles.group}>
                {isLogin ? (
                  <View style={styles.row}>
                    <Text style={styles.nameUser}>Bạn Hoàng Văn Công</Text>
                    <Text style={styles.phone}>{phone}</Text>
                  </View>
                ) : (
                  <View style={styles.enterPhone}>
                    <Text style={styles.enterPhoneDes}>
                      Để xem "Tài khoản" vui lòng nhập số điện thoại mua hàng
                    </Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Số điện thoại"
                        value={phone}
                        onChangeText={setPhone}
                      />
                      <Text
                        style={styles.btnSubmit}
                        onPress={() => {
                          console.log("login");
                          setIsShowVerifyModal(true);
                        }}
                      >
                        Đăng nhập
                      </Text>
                    </View>
                  </View>
                )}
              </View>

              <Pressable
                style={styles.item}
                onPress={() => {
                  navigation.navigate("Level");
                }}
              >
                <Icon
                  name="layers-outline"
                  fill={colors.black}
                  style={styles.icon}
                />
                <View style={styles.levelGroup}>
                  <Text style={styles.levelLabel}>Hạng Đồng</Text>
                  <Text style={styles.levelSub}>
                    Miễn phí giao hàng cho đơn từ 300.000 đồng trở lên
                  </Text>
                </View>
                <Icon
                  name="chevron-right-outline"
                  fill={colors.black}
                  style={styles.rightIcon}
                />
              </Pressable>

              <Pressable
                style={styles.item}
                onPress={() => {
                  navigation.navigate("InforUpdate");
                }}
              >
                <Icon
                  name="person-outline"
                  fill={colors.black}
                  style={styles.icon}
                />
                <Text style={styles.itemLabel}>Sửa thông tin cá nhân</Text>
                <Icon
                  name="chevron-right-outline"
                  fill={colors.black}
                  style={styles.rightIcon}
                />
              </Pressable>
              <Pressable
                style={styles.item}
                onPress={() => {
                  navigation.navigate("DeliveryAddress");
                }}
              >
                <Icon
                  name="pin-outline"
                  fill={colors.black}
                  style={styles.icon}
                />
                <Text style={styles.itemLabel}>Địa chỉ nhận hàng</Text>
                <Icon
                  name="chevron-right-outline"
                  fill={colors.black}
                  style={styles.rightIcon}
                />
              </Pressable>
              <Pressable
                style={styles.item}
                onPress={() => {
                  navigation.navigate("History");
                }}
              >
                <Icon
                  name="shopping-bag-outline"
                  fill={colors.black}
                  style={styles.icon}
                />
                <Text style={styles.itemLabel}>Lịch sử mua hàng</Text>
                <Icon
                  name="chevron-right-outline"
                  fill={colors.black}
                  style={styles.rightIcon}
                />
              </Pressable>
            </View>
            <View style={styles.logOut}>
              <View style={styles.btnLogOutContainer}>
                <Icon
                  name="log-out-outline"
                  fill={colors.red}
                  style={styles.logOutIcon}
                />
                <Text style={styles.logOutLabel}>Đăng xuất</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <VerifyOTPModal
        visible={isShowVerifyModal}
        setVisible={setIsShowVerifyModal}
        phone={phone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColors.gray,
    paddingHorizontal: 12,
    paddingVertical: 12,
    height: "100%",
  },
  content: {
    marginTop: headerHeight,
  },
  infor: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grayLighter,
    borderRadius: 4,
  },
  title: {
    padding: 12,
    fontSize: fontSize.L,
    borderBottomWidth: 1,
    borderColor: colors.grayLighter,
  },
  group: {
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 12,
  },
  nameUser: {
    fontSize: fontSize.L,
    fontWeight: "bold",
    flex: 1,
  },
  phone: {},
  enterPhone: {
    paddingTop: 12,
  },
  enterPhoneDes: {
    fontSize: fontSize.L,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.grayLighter,
    borderRadius: 4,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
  },
  input: {
    padding: 8,
    flex: 1,
  },
  btnSubmit: {
    backgroundColor: colors.green2,
    height: 48,
    color: colors.white,
    lineHeight: 48,
    paddingHorizontal: 12,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  item: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLighter,
  },
  icon: {
    width: 28,
    height: 28,
  },
  levelGroup: {
    paddingHorizontal: 12,
    flex: 1,
  },
  levelLabel: {
    fontSize: fontSize.L,
    fontWeight: "bold",
  },
  levelSub: {
    fontSize: fontSize.S,
    paddingTop: 4,
    color: colors.gray2,
  },
  rightIcon: {
    width: 28,
    height: 28,
  },
  itemLabel: {
    paddingHorizontal: 12,
    flex: 1,
  },

  logOut: {
    marginTop: 12,
    backgroundColor: colors.grayLighter,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 4,
  },
  btnLogOutContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  logOutIcon: {
    width: 28,
    height: 28,
  },
  logOutLabel: {
    padding: 12,
    color: colors.red,
  },
});

export default Account;
