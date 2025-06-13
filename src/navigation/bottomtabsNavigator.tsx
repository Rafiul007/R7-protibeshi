import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/auth/profileScreen';
import VIcon from '../components/atoms/Icon';
import MyBillScreen from '../screens/auth/myBillScreen';
import HomeStackNavigator from './homeStackNavigator';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string) => {
  let iconName: string;

  switch (routeName) {
    case 'Home':
      iconName = 'home-outline';
      break;
    case 'My Bills':
      iconName = 'receipt-outline';
      break;
    case 'Profile':
      iconName = 'person-outline';
      break;
    default:
      iconName = 'help-outline';
  }

  return ({color, size}: {color: string; size: number}) => (
    <VIcon name={iconName} size={size} color={color} type="Ionicons" />
  );
};

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: getTabBarIcon(route.name),
        headerShown: false,
        tabBarActiveTintColor: '#2a9d8f',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 10, fontWeight: 'bold'},
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="My Bills" component={MyBillScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
