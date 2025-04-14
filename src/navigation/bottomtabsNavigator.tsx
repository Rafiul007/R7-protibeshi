import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/auth/homeScreen';
import ProfileScreen from '../screens/auth/profileScreen';
import BillScreen from '../screens/auth/billScreen';
import VIcon from '../components/atoms/Icon';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string) => {
  let iconName: string;

  switch (routeName) {
    case 'Home':
      iconName = 'home-outline';
      break;
    case 'Bills':
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
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bills" component={BillScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
