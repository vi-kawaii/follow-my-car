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
import { useNavigation } from "@react-navigation/native";
import { Car } from "../types/Car";

type ItemProps = {
  car: Car;
};

function Item({ car }: ItemProps) {
  return (
    <View>
      <Text style={styles.name}>{car.name}</Text>
      <Text style={styles.driver_name}>{car.driver_name}</Text>
      <Text style={styles.category}>{car.category}</Text>
    </View>
  );
}

export default function CarListScreen() {
  const [filters, setFilters] = useState(false);
  const [category, setCategory] = useState("Все");
  const navigation = useNavigation();

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
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("ТС", { item })}
          >
            <Item car={item} />
          </TouchableOpacity>
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
