import { StatusBar, View, Text } from "react-native";

const Header = () => {
  return (
    <View className="bg-[#003399] p-3">
      <StatusBar barStyle="light-content" backgroundColor={"#003399"} />
      <Text className="text-white text-xl text-center">BankFund</Text>
    </View>
  );
};

export default Header;
