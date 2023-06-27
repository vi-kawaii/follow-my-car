import cars from "../cars.json";
import { StyleSheet, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dialog, Portal, RadioButton } from "react-native-paper";
import { useState } from "react";

function Item({ car, onClick }: any) {
  return (
    <div style={styles.item} onClick={onClick}>
      <div style={styles.name}>{car.name}</div>
      <div style={styles.driver_name}>{car.driver_name}</div>
      <div style={styles.category}>{car.category}</div>
    </div>
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
      <div style={styles.button} onClick={showFilters}>
        <Ionicons name="list" size={25} color={"black"} />
        Фильтр
      </div>
      <FlatList
        style={styles.container}
        data={
          category !== "Все"
            ? cars.filter((c) => c.category === category)
            : cars
        }
        renderItem={({ item }) => (
          <Item
            onClick={() => navigation.navigate("ТС", { name: item.name })}
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
    fontFamily: "sans-serif",
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
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 18,
    fontFamily: "sans-serif",
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
});
