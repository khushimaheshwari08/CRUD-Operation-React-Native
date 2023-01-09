import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetApi from './src/GetApi';
import PostApi from './src/PostApi';
import PatchApi from './src/PatchApi';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="getAPIScreen">
        <Stack.Screen
          options={{headerShown: false}}
          name="getAPIScreen"
          component={GetApi}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="postApiScreen"
          component={PostApi}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="patchApiScreen"
          component={PatchApi}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
