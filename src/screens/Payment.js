import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import Header from "../components/header/Header";
import RedirectRouter from "../components/RedirectRouter";
import { headerHeight } from "../utils/constants";
import {
  Input,
  IndexPath,
  Layout,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import Radio from "../components/Radio";

const Payment = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <SafeAreaView style={styles.wrap}>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <RedirectRouter title={"Xem lại giỏ hàng"} navigation={navigation} />
          <View style={styles.body}>
            <Text style={styles.title}>Địa chỉ nhận hàng</Text>

            <Input
              style={styles.input}
              placeholder="Số điện thoại"
              //   caption={"Nhập tối thiểu 5 kí tự"}
            />
            <View style={styles.gender}>
              <Radio label={"Anh"} />
              <Radio label={"Chị"} />
            </View>
            <Input style={styles.input} placeholder="Họ và tên đệm" />
            <Input
              style={styles.input}
              placeholder="Tên"
              //   caption={"Nhập tối thiểu 5 kí tự"}
            />
            <View style={styles.inputGroup}>
              <Layout
                style={[styles.selectContainer, { minHeight: 192 }]}
                level="1"
              >
                <Select
                  selectedIndex={selectedIndex}
                  onSelect={(index) => setSelectedIndex(index)}
                >
                  <SelectItem title="Option 1" />
                  <SelectItem title="Option 2" />
                  <SelectItem title="Option 3" />
                </Select>
                <Select
                  selectedIndex={selectedIndex}
                  onSelect={(index) => setSelectedIndex(index)}
                >
                  <SelectItem title="Option 1" />
                  <SelectItem title="Option 2" />
                  <SelectItem title="Option 3" />
                </Select>
              </Layout>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "white",
  },
  container: {
    paddingTop: headerHeight + 24,
  },
  body: {
    paddingHorizontal: 12,
  },
});

export default Payment;
