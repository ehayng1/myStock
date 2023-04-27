import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";
import StockTab from "./Screens/Stock";
import Home from "./Screens/Home";
import TradeTab from "./Screens/Trade";
import Leaderboard from "./Screens/Leaderboard";
import Resources from "./Screens/Resources";
import About from "./Screens/Drawer/About";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const screenWidth = Dimensions.get("window") * 0.3;
const Tab = createBottomTabNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#D84315",
    background: "white",
  },
};

function MyTabs({ navigation, route }) {
  // console.log("nav: ", navigation);
  // console.log("route: ", route);
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#E64A19",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // headerShown: false,
          headerTitleAlign: "center",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Stock"
        component={StockTab}
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarLabel: "Stock",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-timeline-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={TradeTab}
        options={{
          headerShown: false,
          tabBarLabel: "Trade",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="swap-vertical"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarLabel: "Leaderboard",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{
          headerShown: false,
          tabBarLabel: "Resources",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="paperclip"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    const auth = getAuth();
    // const loginCheck = async () => {
    //   onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/firebase.User
    //       setisLoggedIn(true);
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //     }
    //   });
    // };
    // loginCheck();
    const loginCheck = async () => {
      const user = auth.currentUser;
      if (user) {
        setisLoggedIn(true);
        console.log("Logged in: ", isLoggedIn);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
      } else {
        // No user is signed in.
      }
    };
    loginCheck();
  }, []);
  return (
    <Drawer.Navigator
      initialRouteName={isLoggedIn ? "Home" : "Login"}
      screenOptions={({ navigation }) => ({
        // drawerIcon: ({ size, color }) => (
        //   <MaterialCommunityIcons name="menu" color="blue" size={size} />
        // ),
        headerLeft: () => (
          <MaterialCommunityIcons
            name="menu"
            color="#D84315"
            size={25}
            style={{ marginLeft: "5%" }}
            onPress={navigation.toggleDrawer}
          />
        ),
        // drawerActiveTintColor: "black",
      })}
    >
      <Drawer.Screen
        name="Home"
        component={MyTabs}
        options={{
          drawerIcon: ({ size }) => (
            <MaterialCommunityIcons name="home" color="#E64A19" size={size} />
          ),
          drawerLabel: "Home",
          title: "DREAM",
          headerTitleAlign: "center",
          headerStyle: {
            // removes the border bottom line of DREAM
            shadowColor: "transparent",
          },
          headerRight: ({ onPress }) => (
            <Image
              style={{
                marginRight: "10%",
                width: 40,
                height: 40,
                borderRadius: 15,
              }}
              source={require("./data/logo.png")}
            />
          ),
          // headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      {/* <Drawer.Screen
        name="About Us"
        component={About}
        options={{ drawerLabel: "About Us" }}
      /> */}
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          // uncomment this when testing is over
          headerShown: false,
          drawerLabel: "Login / Sign Up",
        }}
      />
      <Drawer.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          drawerLabel: "Sign Up",
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
}

function LogoTitle() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginLeft: "35%",
          marginRight: "30%",
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        DREAM
      </Text>
      <Image
        style={{
          // marginLeft: "40%",
          // marginRight: "10%",
          width: 40,
          height: 40,
          borderRadius: 15,
        }}
        source={require("./data/logo.png")}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer>
        <MyTabs />
      </MyDrawer>
      {/* <MyTabs></MyTabs> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
