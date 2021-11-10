import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen.js';
import HistoryScreen from '../Screens/HistoryScreen.js';
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({route}) => ({
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home-sharp'
                                : 'home-outline';
                        } else if (route.name === 'History') {
                            iconName = focused ? 'time' : 'time-outline';
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} type="ionicon" color={color}/>;
                    },
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen 
                    name="History" 
                    component={HistoryScreen} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}