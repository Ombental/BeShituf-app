import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import Calculator from "../components/Calculator/Calculator";
import { KeyboardAvoidingView } from "react-native";

export default function TransactionForm({ isOpen, setIsOpen, category }) {
  console.log(`isopen: ${isOpen}`);
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["75%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={"close"}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={isOpen ? 0 : -1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      onChange={handleSheetChanges}
      onClose={() => {
        console.log("woot");
        setIsOpen(false);
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ height: "100%" }}
      >
        <View
          style={{
            marginTop: 20,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text>ACCOUNT</Text>
          <Text>
            CATEGORY: {category.name} || {category.transactionType}{" "}
          </Text>
        </View>
        <Calculator transactionType={category.transactionType} />
      </KeyboardAvoidingView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "blue",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
