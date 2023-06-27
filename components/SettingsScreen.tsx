import { useState } from "react";
import { StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

export default function SettingsScreen({ route, navigation }: any) {
  const [lang, setLang] = useState("ru");
  return (
    <>
      <div style={styles.title}>Язык</div>
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
    fontFamily: "sans-serif",
    fontWeight: "bold",
    paddingLeft: 18,
    paddingBottom: 4,
  },
});
