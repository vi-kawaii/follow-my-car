import { StyleSheet, Text, Button, View, Linking } from "react-native";
import MapView from "react-native-maps";

export default function CarScreen({ route, navigation }: any) {
  return route.params?.item ? (
    <View>
      <MapView style={styles.map} />
      <View style={styles.container}>
        <Text style={styles.name}>{route.params.item.name}</Text>
        <Text style={styles.category}>{route.params.item.category}</Text>
        <Text>{route.params.item.driver_name}</Text>
        <Text style={styles.phone}>{route.params.item.phone}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Позвонить"
          onPress={() => Linking.openURL(`tel:${route.params.item.phone}`)}
        />
        <Button
          title="Написать"
          onPress={() =>
            Linking.openURL(
              `whatsapp://send?text=Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе&phone=${route.params.item.phone}`
            )
          }
        />
      </View>
    </View>
  ) : (
    <Text style={styles.nothing}>Выберите ТС из списка</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    gap: 4
  },
  name: {
    fontSize: 20,
    paddingBottom: 14
  },
  category: {
    color: "gray",
  },
  phone: {
    color: "gray",
  },
  map: {
    width: "100%",
    height: 300,
  },
  nothing: {
    textAlign: "center",
    paddingTop: 250,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
