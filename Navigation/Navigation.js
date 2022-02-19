import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from "react-native-elements";

import * as Colors from '../assets/colors';

import HomeScreen from '../Screens/HomeScreen.js';
import HistoryScreen from '../Screens/HistoryScreen.js';
import MemeCadre from '../Screens/MemeCadre.js';
import MemeCadrePreview from '../Screens/MemePreview.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {

    const HomeStackScreens = () => {
        return (
            <Stack.Navigator
                screenOptions={() => ({
                    headerShown: false
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
        )
    }

    const HistoryStackScreens = () => {
        return (
            <Stack.Navigator
                screenOptions={() => ({
                    headerShown: false,
                })}
            >
                <Stack.Screen
                    name="History"
                    component={HistoryScreen}
                />
            </Stack.Navigator>
        )
    }

    return(
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'HomeScreens') {
                            iconName = focused
                                ? 'home-sharp'
                                : 'home-outline';
                        } else if (route.name === 'HistoryScreens') {
                            iconName = focused ? 'time' : 'time-outline';
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} type="ionicon" color={color}/>;
                    },
                    tabBarInactiveTintColor: 'white',
                    tabBarActiveTintColor: Colors.tertiaryColor,
                    tabBarActiveBackgroundColor: Colors.tabBackgroundColor,
                    tabBarInactiveBackgroundColor: Colors.tabBackgroundColor
                })}
            >
                <Tab.Screen
                    name="HomeScreens" 
                    component={HomeStackScreens}
                />
                <Tab.Screen
                    name="HistoryScreens" 
                    component={HistoryStackScreens}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}