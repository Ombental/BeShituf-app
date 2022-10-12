import React from "react";
import { Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CalculatorDateKey({ calc, setCalc, key }) {
  const [show, setShow] = React.useState(false);

  const onDatePicked = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setCalc({
      ...calc,
      date: selectedDate,
    });
  };

  const showDatePicker = () => {
    // if (Platform.OS === 'android') {
    //   setShow(false);
    //   // for iOS, add a button that closes the picker
    // }
    setShow(true);
  };

  return (
    <>
      <Button
        key={key}
        children=""
        mode="contained"
        icon="calendar"
        onPress={showDatePicker}
      />
      {show && (
        <DateTimePicker value={calc.date} mode="date" onChange={onDatePicked} />
      )}
    </>
  );
}
