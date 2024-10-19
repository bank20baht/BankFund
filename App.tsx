import { SafeAreaView, Text, View } from "react-native";
import Header from "./src/components/Header";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <View>
        <Text className="">Hello</Text>
      </View>
    </SafeAreaView>
  );
}
