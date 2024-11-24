import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PageOne from "@/hooks/PageOne";
import PageTwo from "@/hooks/PageTwo";
import PageThree from "@/hooks/PageThree";
const Stack = createNativeStackNavigator();

const defaultScreenOptions = {
  headerTitleStyle: { color: "white" },
  headerBackVisible: true,
  headerTintColor: "white",
  headerStyle: { backgroundColor: "#101010" },
  contentStyle: { backgroundColor: "#101010" },
};

export default function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="PageOne"
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name="PageOne"
        component={PageOne}
        options={{
          headerTitle: "PageOne",
        }}
      />
      <Stack.Screen
        name="PageTwo"
        component={PageTwo}
        options={{
          headerTitle: "PageTwo",
        }}
      />
      <Stack.Screen
        name="PageThree"
        component={PageThree}
        options={{
          headerTitle: "PageThree",
        }}
      />
    </Stack.Navigator>
  );
}
