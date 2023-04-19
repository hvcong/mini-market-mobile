import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  ButtonGroup,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { NavigationContainer } from "@react-navigation/native";
import Tab from "./src/navigation/Tab";
import MainStack from "./src/navigation/MainStack";
import Drawer from "./src/navigation/Drawer";
import GlobalContextProvider from "./src/store/contexts/GlobalContext";
import LoadingModal from "./src/components/modal/LoadingModal";
import { OrderProvider } from "./src/store/contexts/OrderContext";
import PromotionContextProvider from "./src/store/contexts/PromotionContext";
import PriceContextProvider from "./src/store/contexts/PriceContext";
import QRCode from "./src/components/qrCode/QRCode";

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <GlobalContextProvider>
          <PromotionContextProvider>
            <PriceContextProvider>
              <OrderProvider>
                <NavigationContainer>
                  <Drawer />
                </NavigationContainer>
                <LoadingModal />
                {/* <QRCode /> */}
              </OrderProvider>
            </PriceContextProvider>
          </PromotionContextProvider>
        </GlobalContextProvider>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});
