import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Icon from "react-native-vector-icons/FontAwesome";
import ProductStackScreen from "./ProductStackScreen";
import Groceries from "./Groceries";
import LoginPage from "./LoginPage";
import RegisterScreen from "./RegisterScreen";

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "SupermAAART",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color="#3b5998" size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductStackScreen}
        options={{
          title: "SupermAAART",
          tabBarLabel: "Products",
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-basket" color="#3b5998" size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Supermarkets"
        component={LoginPage}
        options={{
          title: "SupermAAART",
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" color="#3b5998" size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping List"
        component={RegisterScreen}
        options={{
          title: "SupermAAART",
          tabBarLabel: "List",
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color="#3b5998" size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
