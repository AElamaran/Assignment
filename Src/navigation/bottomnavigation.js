import * as React from 'react';
import { Text, View } from 'react-native';
import ProductScreen from '../screens/ProductScreen';
import CardScreen from '../screens/CardScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {useState} from 'react';

const Tab = createBottomTabNavigator()

export default function Bottomnavigation() {

  const [list,setList] = useState([]);

  const handleAdd= (product1) => {
    console.log("hello ");
    setList([...list,product1]);


  }
    return (
     
        <Tab.Navigator>
          <Tab.Screen name="Product" component={ProductScreen}  initialParams={{handleAdd: handleAdd}} />
          <Tab.Screen name="Card" component={CardScreen}   initialParams={{ list: list }} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      
    );
  }