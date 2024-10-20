import { Button, SafeAreaView, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import Header from "./src/components/Header";
import useCountStore from "./src/store/store";
import { styled } from "nativewind";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

const AnimatedView = styled(Animated.View);
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { count, increaseCount, decreaseCount } = useCountStore();
  const [loaded, error] = useFonts({
    Prompt: require("./assets/fonts/Prompt-Regular.ttf"),
  });

  const width = useSharedValue(100);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
    };
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  const handlePressDecrees = () => {
    width.value = withSpring(width.value - 50);
  };

  return (
    <SafeAreaView className="flex-1">
      <Header />
      <View className="p-4">
        <Text style={{ fontFamily: "Prompt" }}>Count: {count}</Text>
        <Text className="text-lg" style={{ fontFamily: "Prompt" }}>
          Hello
        </Text>
        <Text className="text-lg" style={{ fontFamily: "Prompt" }}>
          สวัสดี
        </Text>
        <Button title="Increase" onPress={increaseCount} />
        <Button title="Decrease" onPress={decreaseCount} />
      </View>

      <View className="flex items-center justify-center mt-4">
        <AnimatedView className="bg-violet-500 h-24" style={animatedStyle} />
      </View>

      <View className="flex-row justify-around mt-4">
        <Button onPress={handlePress} title="Expand" />
        <Button onPress={handlePressDecrees} title="Shrink" />
      </View>
    </SafeAreaView>
  );
}
