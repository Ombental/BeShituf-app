import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Categories from "../screens/Categories";
import Transactions from "../screens/Transactions";

const MainTab = createMaterialBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Categories" component={Categories} />
      <MainTab.Screen name="Transactions" component={Transactions} />
    </MainTab.Navigator>
  );
}
