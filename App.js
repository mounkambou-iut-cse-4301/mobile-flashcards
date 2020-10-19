import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Platform } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from "@react-navigation/stack"
import { FontAwesome } from "@expo/vector-icons"
import Constants from "expo-constants"
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import { white, jungleGreen, blue } from "./utils/colors"


function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = Platform.OS === "ios" ? createBottomTabNavigator() : createMaterialTopTabNavigator()
const TabNav = () => (
  <Tabs.Navigator
    initialRouteName="DeckList"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ }) => {
        let icon;
        if (route.name === "Deck List") {
          icon = <FontAwesome name='bookmark'
            size={30}
            color={jungleGreen} />
        } else if (route.name === "Add Deck") {
          icon = <FontAwesome name='plus-square' size={30} color={jungleGreen} />
        }
        return icon;
      },
    })}
    tabBarOptions={{
      header: null,
      activeTintColor: Platform.OS === "ios" ? blue : white,
      showIcon: true,
      style: {
        height: 80,
        backgroundColor: Platform.OS === "ios" ? white : blue,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    }}
  >
    <Tabs.Screen name="Deck List" component={DeckList} />
    <Tabs.Screen name="Add Deck" component={AddDeck} />
  </Tabs.Navigator>
)

const Stack = createStackNavigator()

const MainNav = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name="Home"
      component={TabNav}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="DeckDetail"
      component={DeckDetail}
      options={{
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue,
        },
      }}
    />
        <Stack.Screen
      name="AddCard"
      component={AddCard}
      options={{
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue,
        },
      }}
    />
            <Stack.Screen
      name="Quiz"
      component={Quiz}
      options={{
        headerTintColor: white,
        headerStyle: {
          backgroundColor: blue,
        },
      }}
    />
  </Stack.Navigator>
)

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <UdaciStatusBar backgroundColor={blue} barStyle="light-content" />
        <MainNav />
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  )
}

