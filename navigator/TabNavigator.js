import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "modal",
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Section" component={SectionScreen} />
    </Stack.Navigator>
  );
}

function CoursesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Courses" component={CoursesScreen} />
    </Stack.Navigator>
  );
}

function ProjectsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Projects" component={ProjectsScreen} />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="home" size={26} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="CoursesStack"
        component={CoursesStack}
        options={{
          tabBarLabel: 'Courses',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="albums" size={26} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="ProjectsStack"
        component={ProjectsStack}
        options={{
          tabBarLabel: 'Projects',
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="folder" size={26} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
