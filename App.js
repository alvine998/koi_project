import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { Text, View } from 'react-native';
import { MyTabs } from './src/components/Bottomtabs';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Products from './src/pages/Products';
import Create from './src/pages/Products/Create';
import Register from './src/pages/Register';
import Splash from './src/pages/splash';

const App = () => {

  const Stack = createStackNavigator()
  const horizontalAnimation = {
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={MyTabs} options={horizontalAnimation} />
          <Stack.Screen name='Login' component={Login} options={horizontalAnimation}/>
          <Stack.Screen name='Register' component={Register} options={horizontalAnimation}/>
          <Stack.Screen name='Products' component={Products} options={horizontalAnimation}/>
          <Stack.Screen name='Create' component={Create} options={horizontalAnimation}/>
          <Stack.Screen name='Splash' component={Splash} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;