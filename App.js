import React from 'react'
// import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Bottomnavigation from './Src/navigation/bottomnavigation'
import LoginScreen from './Src/screens/LoginScreen'
import {Provider, useSelector,useDispatch} from 'react-redux';
import { store } from './Src/Store';
import {actions} from './Src/Store';

const Stack = createStackNavigator()

export default function App() {
  return (
    // <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />

          <Stack.Screen name="Bottomnavigation" component={Bottomnavigation} />
          {/* <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />

         <Stack.Screen
            name="Company"
            component={Company}
          />

<Stack.Screen
            name="Driver"
            component={Driver}
          /> */}
        
        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
  )
}
