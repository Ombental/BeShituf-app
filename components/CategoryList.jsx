import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { http } from "../services";
import useGetCategories from "../services/useGetCategories";
import { FlatList } from "react-native-gesture-handler";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ setCategory, setIsOpen }) {
  const [isExpense, setIsExpense] = React.useState(true);
  const { data, isFetching } = useGetCategories(isExpense);
  if (isFetching)
    return (
      <View>
        <Text>Fetching...</Text>
      </View>
    );
  const categories = data.results;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>CategoryList 2</Text>
      <Button
        title="woooot"
        onPress={() => setIsExpense(!isExpense)}
        style={{ backgroundColor: "yellow", color: "white" }}
      />
      <Text>WTF</Text>
      {categories ? (
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryItem
              setIsOpen={setIsOpen}
              setCategory={setCategory}
              category={item}
            />
          )}
        />
      ) : (
        <Text>EMPTY</Text>
      )}
    </View>
  );
}
