import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabNavigator from "./MainTabNavigator";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import TransactionForm from "../screens/TransactionForm";

const RootStack = createNativeStackNavigator();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen
        name="MainTabs"
        component={gestureHandlerRootHOC(MainTabNavigator)}
      />
      <RootStack.Screen
        name="TransactionForm"
        component={gestureHandlerRootHOC(TransactionForm)}
      />
    </RootStack.Navigator>
  );
}
