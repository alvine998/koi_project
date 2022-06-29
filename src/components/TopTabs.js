import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import normalize from 'react-native-normalize'
import Bidding from '../pages/Bidding'

const Toptabs = () => {
    const Top = createMaterialTopTabNavigator()
    return(
        <Top.Navigator screenOptions={{tabBarStyle:{height:normalize(50)}, tabBarActiveTintColor:"red", tabBarScrollEnabled:true, tabBarIndicatorStyle:{backgroundColor:"red"}}}>
            <Top.Screen name='Lelang' component={Bidding} options={{tabBarLabel:"Lelang", tabBarLabelStyle:{color:"red", fontSize:normalize(14)} }} />
            <Top.Screen name='Terjual' component={Bidding} options={{tabBarLabel:"Terjual", tabBarLabelStyle:{color:"red", fontSize:normalize(14)}}}/>
            <Top.Screen name='TakTerjual' component={Bidding} options={{tabBarLabel:"Tak Terjual", tabBarLabelStyle:{color:"red", fontSize:normalize(14)}}} />
            <Top.Screen name='Fee' component={Bidding} options={{tabBarLabel:"Fee", tabBarLabelStyle:{color:"red", fontSize:normalize(14)}}} />
        </Top.Navigator>
    )
}

export default Toptabs