import { StyleSheet, Text, Button, View } from "react-native";
// import MapView from "react-native-maps";

export default function CarScreen({ route, navigation }: any) {
  return route.params?.item ? (
    <View>
      <View>{/* <MapView /> */}</View>
      <Text>{route.params.item.category}</Text>
      <Text>{route.params.item.driver_name}</Text>
      <Text>{route.params.item.phone}</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Позвонить" />
        <Button title="Написать" />
      </View>
    </View>
  ) : (
    <Text style={styles.nothing}>Выберите ТС из списка</Text>
  );
}

const styles = StyleSheet.create({
  nothing: {
    textAlign: "center",
    paddingTop: 250,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  callButton: {
    width: "100%",
    backgroundColor: "blue",
  },
  writeButton: {
    width: "100%",
    backgroundColor: "green",
  },
});
