import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/auth/home/homeScreen';
import TenantScreen from '../screens/auth/home/tenantScreen';
import BillScreen from '../screens/auth/home/billsScreen';
import RentScreen from '../screens/auth/home/rentScreen';
import PaymentScreen from '../screens/auth/home/paymentScreen';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="TenantScreen" component={TenantScreen} />
      <Stack.Screen name="BillsScreen" component={BillScreen} />
      <Stack.Screen name="RentScreen" component={RentScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
}
