import { Text, TouchableHighlight } from "react-native";
import React from "react";

export default function CategoryItem({ category, setCategory, setIsOpen }) {
  return (
    <TouchableHighlight
      style={{
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 50,
      }}
      onPress={() => {
        setCategory({
          id: category.id,
          name: category.name,
          transactionType: category.transaction_type,
        });
        setIsOpen(true);
      }}
    >
      <Text style={{ border: "black 10px" }}>
        {category.name} | {category.transaction_type}
      </Text>
    </TouchableHighlight>
  );
}
