import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { Layout, Text, Input, Icon, Button } from "@ui-kitten/components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const renderIcon = (props) => (
    // <TouchableWithoutFeedback onPress={toggleSecureEntry}>
    //   <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    // </TouchableWithoutFeedback>
    <Icon name={"eye"} />
  );

  return (
    <Layout style={styles.container}>
      <View style={styles.body}>
        <Text category="h1">Đăng nhập</Text>
        <View style={styles.enter}>
          <Input
            style={styles.input}
            value={username}
            label="Email / Số điện thoại"
            placeholder="Emai/ Sđt"
            caption={"Nhập tối thiểu 5 kí tự"}
            onChangeText={(username) => setUsername(username)}
          />
          <Input
            style={styles.input}
            value={password}
            label="Mật khẩu"
            placeholder="mật khẩu"
            caption={""}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <Text category="p1" style={styles.forgotPass}>
            Quên mật khẩu ?
          </Text>
          <Button size="medium" style={styles.button}>
            Đăng nhập
          </Button>

          <Text category="s1" style={{ textAlign: "center" }}>
            Đăng nhập bằng cách khác
          </Text>
          <View style={styles.otherLogin}>
            <View style={[styles.item, { backgroundColor: "#db6f21" }]}>
              <Icon fill="#fff" name="google" style={styles.icon} />
            </View>
            <View style={[styles.item, { backgroundColor: "#1559bf" }]}>
              <Icon fill="#fff" name="facebook" style={styles.icon} />
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    width: "100%",
    alignItems: "center",
    marginTop: 44,
  },
  enter: {
    width: "80%",
    marginTop: 36,
  },
  input: {
    paddingBottom: 12,
  },
  icon: {
    width: 36,
    height: 36,
  },
  forgotPass: {
    marginLeft: "auto",
    marginBottom: 12,
  },
  button: {
    marginBottom: 24,
  },
  otherLogin: {
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 16,
    marginHorizontal: 8,
  },
});

export default Login;
