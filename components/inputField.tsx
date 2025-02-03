import { StyleSheet, TextInput } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {};

const InputField = (props: React.ComponentProps<typeof TextInput>) => {
  return <TextInput style={styles.inputField} {...props} />;
};

export default InputField;

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    fontSize: 16,
    borderRadius: 5,
    color: Colors.black,
    marginBottom: 20,
  },
});
