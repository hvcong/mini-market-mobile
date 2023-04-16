import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text, TextInput } from "react-native";
import Header from "../components/header/Header";
import RedirectRouter from "../components/RedirectRouter";
import { colors, fontSize, headerHeight } from "../utils/constants";
import {
  Input,
  IndexPath,
  Layout,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import Radio from "../components/Radio";
import PaymentSubmit from "../components/payment/PaymentSubmit";
import DeliveryTime from "../components/payment/DeliveryTime";
import PaymentWays from "../components/payment/PaymentWays";
import SpaceLine from "../components/common/SpaceLine";
import Voucher from "../components/common/Voucher";
import PaymentBill from "../components/payment/PaymentBill";
import DeliveryNote from "../components/payment/DeliveryNote";
import { SafeAreaView } from "react-native-safe-area-context";
import VoucherModal from "../components/modal/VoucherModal";
import addressApi from "./../api/addressApi";
import { useEffect } from "react";
import { useGlobalContext } from "../store/contexts/GlobalContext";
import { Toast } from "../utils";
import SelectDropdown from "react-native-select-dropdown";

const Payment = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [isVisibleVoucherModal, setIsVisibleVoucherModal] = useState(false);

  const { account, isLogin } = useGlobalContext();

  const [formState, setFormState] = useState({
    id: "KH0452246",
    firstName: "Lê ",
    lastName: "Phong",
    phonenumber: "0954622233",
    email: "lephong@gmail.com",
    HomeAddressId: 1,
    TypeCustomerId: "TN",
  });

  useEffect(() => {
    setFormState({
      ...account,
    });

    return () => {};
  }, [account]);

  const [userAdress, setUserAdress] = useState({
    cityId: "",
    districtId: "",
    wardId: "",
    homeId: "",
    homeName: "",
  });

  const [allAddress, setAllAddress] = useState({
    cities: [],
    districts: [],
    wards: [],
  });

  useEffect(() => {
    loadAllAddress();
    return () => {};
  }, []);

  async function loadAllAddress() {
    let res = await addressApi.getAllCity();
    console.log(res.cities);
    if (res.isSuccess) {
      setAllAddress({
        cities: res.cities,
      });
    }

    res = await addressApi.getAllDistrict();
    if (res.isSuccess) {
      setAllAddress({
        districts: res.districts,
      });
    }

    res = await addressApi.getAllWard();
    if (res.isSuccess) {
      setAllAddress({
        wards: res.wards,
      });
    }
  }

  return (
    <SafeAreaView style={styles.wrap}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <RedirectRouter title={"Xem lại giỏ hàng"} navigation={navigation} />
          <View style={styles.body}>
            <Text style={styles.title}>Địa chỉ nhận hàng</Text>

            <View style={styles.form}>
              <Input
                disabled
                style={styles.input}
                placeholder="Số điện thoại"
                value={formState.phonenumber}
                //   caption={"Nhập tối thiểu 5 kí tự"}
              />
              {/* <View style={styles.gender}>
                <Radio label={"Anh"} style={styles.radioItem} />
                <Radio label={"Chị"} style={styles.radioItem} />
              </View> */}
              <Input
                disabled
                style={styles.input}
                placeholder="Họ và tên đệm"
                value={account.firstName}
              />
              <Input
                style={styles.input}
                placeholder="Tên"
                disabled
                value={account.lastName}
                //   caption={"Nhập tối thiểu 5 kí tự"}
              />
              <View style={styles.inputGroup}>
                <Select
                  selectedIndex={selectedIndex}
                  onSelect={(index) => setSelectedIndex(index)}
                  style={styles.select}
                >
                  {allAddress.cities &&
                    allAddress.cities.map((city, index) => {
                      return <SelectItem title="aa" />;
                    })}
                </Select>
                <Select
                  selectedIndex={selectedIndex}
                  onSelect={(index) => setSelectedIndex(index)}
                  style={[styles.select, { paddingLeft: 24 }]}
                >
                  {allAddress.districts &&
                    allAddress.districts
                      .filter((item) => {
                        return item.cityId == userAdress.cityId;
                      })
                      .map((item) => {
                        return <SelectItem title={item.name} key={item.id} />;
                      })}
                </Select>
              </View>
              <Select
                selectedIndex={selectedIndex}
                onSelect={(index) => setSelectedIndex(index)}
                style={styles.select}
              >
                {}
                {/* <SelectItem title="Option 1" />
                <SelectItem title="Option 2" />
                <SelectItem title="Option 3" /> */}
              </Select>
              <Input
                style={styles.input}
                placeholder="Số nhà, tên đường"
                //   caption={"Nhập tối thiểu 5 kí tự"}
              />
            </View>
          </View>
          {/* <SpaceLine /> */}
          {/* <DeliveryTime /> */}
          <SpaceLine />
          <PaymentWays />
          {/* <SpaceLine /> */}
          {/* <Voucher
            isVisibleVoucherModal={isVisibleVoucherModal}
            setIsVisibleVoucherModal={setIsVisibleVoucherModal}
          /> */}
          <SpaceLine />
          <PaymentBill />
          <SpaceLine />
          <DeliveryNote />
        </View>
      </ScrollView>
      <View style={styles.submit}>
        <PaymentSubmit />
      </View>
      <VoucherModal
        visible={isVisibleVoucherModal}
        setVisible={setIsVisibleVoucherModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.white,
  },
  container: {
    paddingTop: headerHeight,
    paddingBottom: 72,
  },

  body: {
    paddingHorizontal: 12,
  },
  form: {
    paddingVertical: 12,
  },
  title: {
    fontSize: fontSize.XL,
    textTransform: "uppercase",
    paddingTop: 12,
    fontWeight: "bold",
    color: colors.gray2,
  },

  input: {
    marginBottom: 12,
  },
  gender: {
    flexDirection: "row",
  },
  radioItem: {
    paddingRight: 24,
  },
  inputGroup: {
    flexDirection: "row",
    flex: 1,
  },
  select: {
    flex: 1,
    marginBottom: 12,
  },
  submit: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Payment;
