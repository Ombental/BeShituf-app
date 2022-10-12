import { View, Text, Alert } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import CalculatorKey from "./CalculatorKey";
import { TextInput } from "react-native-paper";
import CalculatorDateKey from "./CalculatorDateKey";
import { initialCalcState } from "../../utils/constants";

const calcButtonValues = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  ["C", 0, "."],
];

export default function Calculator({ transactionType }) {
  const [calc, setCalc] = React.useState(initialCalcState);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        marginTop: -10,
      }}
    >
      <Text>
        {transactionType}: {calc.num === "" ? "0" : calc.num}
      </Text>
      <TextInput
        placeholder="Notes"
        value={calc.notes}
        style={{ maxHeight: "20%", marginBottom: 10, marginTop: 10 }}
        onChangeText={(text) => {
          setCalc({ ...calc, notes: text });
        }}
      />
      <View
        style={{
          flexDirection: "row",
          width: "80%",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={calcButtonValues.flat()}
          numColumns={3}
          renderItem={({ item, i }) => (
            <CalculatorKey calc={calc} setCalc={setCalc} key={i} item={item} />
          )}
        />
        <FlatList
          data={["<", "DATE", "SUBMIT"]}
          numColumns={1}
          renderItem={({ item, i }) =>
            item === "DATE" ? (
              <CalculatorDateKey calc={calc} setCalc={setCalc} key={i} />
            ) : (
              <CalculatorKey
                calc={calc}
                setCalc={setCalc}
                key={i}
                item={item}
              />
            )
          }
        />
      </View>
      <Text>{calc.date.toDateString()}</Text>
    </View>
  );
}
