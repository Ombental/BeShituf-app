import React from "react";
import { Button } from "react-native-paper";
import { initialCalcState } from "../../utils/constants";

export default function CalculatorKey({ calc, setCalc, key, item }) {
  const commaClickHandler = () => {
    setCalc({
      ...calc,
      num: !calc.num.includes(".") ? calc.num + item : calc.num,
    });
  };

  const eraseClickHandler = () => {
    const newNum = calc.num.slice(0, -1);

    setCalc({
      ...calc,
      num: newNum.slice(-1) === "." ? newNum.slice(0, -1) : newNum,
    });
  };

  const numClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num + item,
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      num: "",
    });
  };

  const submitClickHandler = () => {
    console.log(calc); // this should send to somewhere -> api
    setCalc(initialCalcState);
    // should close the form modal
  };

  return (
    <Button
      key={key}
      children={item === "SUBMIT" ? "" : item}
      mode="contained"
      icon={item === "SUBMIT" ? "check" : ""}
      onPress={
        item === "C"
          ? resetClickHandler
          : item === "<"
          ? eraseClickHandler
          : item === "."
          ? commaClickHandler
          : item === "SUBMIT"
          ? submitClickHandler
          : numClickHandler
      }
    />
  );
}
