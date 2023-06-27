export default function CarScreen({ route, navigation }: any) {
  return route.params?.name || "Не выбрано ни одно ТС из списка";
}
