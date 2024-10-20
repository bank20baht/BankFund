import { Button, SafeAreaView, Text, View } from "react-native";
import Header from "./src/components/Header";
import useCountStore from "./src/store/store";

export default function App() {
  const { count, increaseCount, decreaseCount } = useCountStore();

  return (
    <SafeAreaView className="flex-1">
      <Header />
      <View>
        <Text>Count: {count}</Text>
        <Text className="">Hello</Text>
        <Button title="Increase" onPress={increaseCount} />
        <Button title="Decrease" onPress={decreaseCount} />
      </View>
    </SafeAreaView>
  );
}
