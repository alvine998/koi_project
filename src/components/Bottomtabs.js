import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Account from '../pages/Account';

const Tab = createBottomTabNavigator();

export function MyTabs({active, setActive}) {
    return (
        <Tab.Navigator  screenOptions={{ headerShown: false }}>
            <Tab.Screen  name="Home" component={Home} options={{ tabBarLabel: "Jelajah", tabBarIcon: () => (<Icon name="globe-europe" size={26} />)}} />
            <Tab.Screen name="Bid" component={Home} options={{ tabBarLabel: "Bid", tabBarIcon: () => (<Icon name="gavel"  size={26} />) }} />
            <Tab.Screen name="Lelang" component={Home} options={{ tabBarLabel: "Lelang", tabBarIcon: () => (<Icon name="store"  size={26} />) }} />
            <Tab.Screen name="Saya" component={Account} options={{ tabBarLabel: "Saya", tabBarIcon: () => (<Icon name="user-circle"  size={26} />)}}/>
        </Tab.Navigator>
    );
}