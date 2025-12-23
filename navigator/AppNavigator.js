import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    presentation: 'modal'
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ presentation: 'card' }}
                />
                <Stack.Screen
                    name="Section"
                    component={SectionScreen}
                    options={{
                        presentation: 'modal',
                        gestureEnabled: true,
                        gestureDirection: 'vertical'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

