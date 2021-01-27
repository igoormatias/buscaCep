import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home'
import About from './src/pages/About'
import {FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const icons = {
  Home: {
    name:'home'
  },
  About: {
    name: 'list'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=> ({
        tabBarIcon:({color, size})=>{
          const {name} = icons[route.name];
          return <FontAwesome name={name} color={color} size={size}/>

        }
      })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}