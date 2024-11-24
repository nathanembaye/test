import { Pressable, Dimensions } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
export default function PageTwo({ navigation }: any) {
  const contentHeight =
    Dimensions.get("window").height -
    (useHeaderHeight() + useBottomTabBarHeight());
  return (
    <Pressable
      onPress={() => navigation.goBack('PageOne')}
      style={{
        width: "100%",
        height: contentHeight,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "green",
      }}
    />
  );
}
