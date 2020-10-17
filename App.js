import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'

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
            color='#29AB87' />
        } else if (route.name === "Add Deck") {
          icon = <FontAwesome name='plus-square' size={30} color='#29AB87' />
        }
        return icon;
      },
    })}
    tabBarOptions={{
      header: null,
      activeTintColor: Platform.OS === "ios" ? '#00f' : '#fff',
      showIcon: true,
      style: {
        height: 80,
        backgroundColor: Platform.OS === "ios" ? '#fff' : '#00f',
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

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <TabNav />
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

