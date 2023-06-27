import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

export default function SettingsScreen() {
  const [lang, setLang] = useState("ru");
  return (
    <>
      <Text style={styles.title}>Язык</Text>
      <RadioButton.Group onValueChange={(value) => setLang(value)} value={lang}>
        <RadioButton.Item label="Русский" value="ru" />
        <RadioButton.Item label="English" value="en" />
      </RadioButton.Group>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 18,
    fontWeight: "bold",
    paddingLeft: 18,
    paddingBottom: 4,
  },
});
