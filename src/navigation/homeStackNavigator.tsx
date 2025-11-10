/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/auth/home/homeScreen';
import TenantScreen from '../screens/auth/home/tenantScreen';
import BillScreen from '../screens/auth/home/billsScreen';
import RentScreen from '../screens/auth/home/rentScreen';
import PaymentScreen from '../screens/auth/home/paymentScreen';
import {Text} from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          headerShown: true,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerLeft: () => {
            return (
              <Text
                style={{
                  marginLeft: 16,
                  fontSize: 24,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Protibeshi
              </Text>
            );
          },
          headerTitle: '',
          headerStyle: {backgroundColor: '#2a9d8f'},
        }}
      />
      <Stack.Screen name="TenantScreen" component={TenantScreen} />
      <Stack.Screen
        name="BillsScreen"
        component={BillScreen}
        options={{
          headerShown: true,
          title: 'Bills',
        }}
      />
      <Stack.Screen name="RentScreen" component={RentScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
}
