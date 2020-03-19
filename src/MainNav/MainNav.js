import React from 'react';

import Home from '../screen/Home';
import Shop from '../screen/shop';
import Favorite from '../screen/favorite';
import Profile from '../screen/profile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MainNavigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigators;
