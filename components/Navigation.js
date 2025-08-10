import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen";
import ProfileScreen from "../pages/ProfileScreen";
import CounterScreen from "../pages/CounterScreen";

const stack = createStackNavigator();

export default function Navigation() {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={HomeScreen} />
      <stack.Screen name="Details" component={DetailsScreen} />
      <stack.Screen name="Profile" component={ProfileScreen} />
      <stack.Screen name="Counter" component={CounterScreen} />
    </stack.Navigator>
  );
}
