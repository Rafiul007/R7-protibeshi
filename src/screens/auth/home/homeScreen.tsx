import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {menuData as staticMenuData} from '../../../constants/app';
import ProfileCard from '../../../components/Molucules/ProfileCard';
import MenuTileGrid from '../../../components/Molucules/Tiles';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Add navigation handlers dynamically
  const menuData = staticMenuData.map(item => {
    let targetScreen = '';

    switch (item.label) {
      case 'Tenant':
        targetScreen = 'TenantScreen';
        break;
      case 'Bills':
        targetScreen = 'BillsScreen';
        break;
      case 'Rent':
        targetScreen = 'RentScreen';
        break;
      case 'Payment':
        targetScreen = 'PaymentScreen';
        break;
      default:
        targetScreen = '';
    }

    return {
      ...item,
      onPress: () => {
        if (targetScreen) {
          navigation.navigate(targetScreen as never);
        }
      },
    };
  });

  return (
    <SafeAreaView style={{flex: 1, padding: 16}}>
      <ProfileCard
        fullName="John Doe"
        houseNumber="NST Tower"
        appartmentNumber="105-A"
        mobileNumber="+1234567890"
        role="Owner"
      />
      <MenuTileGrid data={menuData} columns={4} />
    </SafeAreaView>
  );
};

export default HomeScreen;
