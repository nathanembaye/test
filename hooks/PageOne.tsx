import { Dimensions, Pressable } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
export default function PageOne({ navigation }: any) {
  const contentHeight =
    Dimensions.get("window").height -
    (useHeaderHeight() + useBottomTabBarHeight());
  return (
    <Pressable
      onPress={() => navigation.navigate("PageTwo")}
      style={{
        width: "100%",
        height: contentHeight,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "red",
      }}
    />
  );
}
