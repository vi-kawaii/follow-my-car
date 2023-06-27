import cars from "../cars.json";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { Dialog, Portal, RadioButton } from "react-native-paper";
import { useState } from "react";

function Item({ car, onClick }: any) {
  return (
    <TouchableOpacity style={styles.item} onPress={onClick}>
      <View>
        <Text style={styles.name}>{car.name}</Text>
        <Text style={styles.driver_name}>{car.driver_name}</Text>
        <Text style={styles.category}>{car.category}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function CarListScreen({ navigation }: any) {
  const [filters, setFilters] = useState(false);
  const [category, setCategory] = useState("Все");

  function hideFilters() {
    setFilters(false);
  }

  function showFilters() {
    setFilters(true);
  }

  return (
    <>
      <View style={styles.button}>
        <Button title="Отфильтровать" onPress={showFilters} />
      </View>
      <FlatList
        style={styles.container}
        data={
          category !== "Все"
            ? cars.filter((c) => c.category === category)
            : cars
        }
        renderItem={({ item }) => (
          <Item
            onClick={() => navigation.navigate("ТС", { item })}
            car={item}
          />
        )}
        keyExtractor={(c) => c.name}
      >
        {cars.map((c) => (
          <Item car={c} key={c.name} />
        ))}
      </FlatList>
      <Portal>
        <Dialog visible={filters} onDismiss={hideFilters}>
          <Dialog.Title>Выберите категорию</Dialog.Title>
          <RadioButton.Group
            onValueChange={(value) => {
              setCategory(value);
              hideFilters();
            }}
            value={category}
          >
            <RadioButton.Item label="Все" value="Все" />
            <RadioButton.Item label="Грузовой" value="Грузовой" />
            <RadioButton.Item label="Пассажирский" value="Пассажирский" />
            <RadioButton.Item label="Спецтранспорт" value="Спецтранспорт" />
          </RadioButton.Group>
        </Dialog>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 18,
    paddingRight: 18,
  },
  item: {
    marginBottom: 18,
  },
  name: {
    fontWeight: "bold",
  },
  driver_name: {
    color: "gray",
  },
  category: {
    color: "gray",
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
