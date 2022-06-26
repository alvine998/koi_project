import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { MyTabs } from './src/components/Bottomtabs';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Splash from './src/pages/splash';

const App = () => {

  const Stack = createStackNavigator()
  return(
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
          <Stack.Screen name='Home' component={MyTabs} />
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name='Splash' component={Splash}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;