import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { CategoryList } from "../components";
import Header from "../components/Header";
import { authService, http, secureStorage } from "../services";
import { accessTokenKey } from "../utils/constants";
import TransactionForm from "./TransactionForm";

export default function Categories({ navigator }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [category, setCategory] = React.useState({});

  const handlePress = async () => {
    console.log("1wtf1");
    // console.log("wwooottt");
    // fetch("http://10.0.0.7:8000/health_check")
    //   .then((res) => console.log(JSON.stringify(res)))
    //   .catch((err) => console.log(err));
    // console.log("aaa");
    const authServiceResponse = await authService.login("omer-bental", "1234");
    console.log("wtf");
    const accessValue = await secureStorage.getValueFor(accessTokenKey);
    console.log(`Access Token Value: ${accessValue}`);
  };

  return (
    <>
      <Header />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          onPress={handlePress}
          title="we are the champions"
          style={{ backgroundColor: "green", color: "white" }}
        />
        <Text>Categories</Text>
      </View>
      <CategoryList setIsOpen={setIsOpen} setCategory={setCategory} />
      <TransactionForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        category={category}
      />
    </>
  );
}
