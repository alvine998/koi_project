import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Account from '../pages/Account';
import Bidding from '../pages/Bidding';
import Toptabs from './TopTabs';
import Bidder from '../pages/Bidder';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Tab = createBottomTabNavigator();

export function MyTabs({active, setActive}) {
    const [login, setLogin] = useState(false)
    const getSession = () => {
        AsyncStorage.getItem("loginSession").then(
            res => {
                if(res == null){
                    setLogin(false)
                } else {
                    setLogin(true)
                }
            }
        )
    }

    useEffect(()=>{
        getSession()
    },[])
    return (
        <Tab.Navigator  screenOptions={{ headerShown: false, tabBarInactiveTintColor:"grey", tabBarActiveTintColor:"red" }}>
            <Tab.Screen  name="Home" component={Home} options={{ tabBarLabel: "Jelajah", tabBarIcon: ({focused}) => (<Icon name="globe-europe" size={26} color={focused ? "red" : "grey"} />)}}/>
            <Tab.Screen name="Bid" component={Bidder} options={{ tabBarLabel: "Bid", tabBarIcon: ({focused}) => (<Icon name="gavel"  size={26} color={focused ? "red" : "grey"} />)}} />
            {
                login ? (
                    <Tab.Screen name="Lelang" component={Toptabs} options={{ tabBarLabel: "Lelang", tabBarIcon: ({focused}) => (<Icon name="store"  size={26} color={focused ? "red" : "grey"}/>) }} />
                ) : (
                    <Tab.Screen name="Lelang" component={Bidding} options={{ tabBarLabel: "Lelang", tabBarIcon: ({focused}) => (<Icon name="store"  size={26} color={focused ? "red" : "grey"}/>) }} />
                )
            }
            <Tab.Screen name="Saya" component={Account} options={{ tabBarLabel: "Saya", tabBarIcon: ({focused}) => (<Icon name="user-circle"  size={26} color={focused ? "red" : "grey"}/>)}}/>
        </Tab.Navigator>
    );
}