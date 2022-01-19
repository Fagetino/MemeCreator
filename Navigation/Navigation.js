import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen.js';
import HistoryScreen from '../Screens/HistoryScreen.js';
import MemeCadre from '../Screens/MemeCadre.js';
import MemeCadrePreview from '../Screens/MemePreview.js';
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={({route}) => ({
                    // tabBarShowLabel: false,
                    headerShown: false,
                    // tabBarIcon: ({ focused, color, size }) => {
                    //     let iconName;

                    //     if (route.name === 'Home') {
                    //         iconName = focused
                    //             ? 'home-sharp'
                    //             : 'home-outline';
                    //     } else if (route.name === 'History') {
                    //         iconName = focused ? 'time' : 'time-outline';
                    //     }

                    //     // You can return any component that you like here!
                    //     return <Icon name={iconName} type="ionicon" color={color}/>;
                    // },
                    // tabBarInactiveTintColor: 'gray',
                })}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen 
                    name="MemeCadre" 
                    component={MemeCadre} 
                />
                <Stack.Screen 
                    name="MemeCadrePreview" 
                    component={MemeCadrePreview} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}