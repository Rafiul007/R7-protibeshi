/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import {menuData as staticMenuData} from '../../../constants/app';
import ProfileCard from '../../../components/Molucules/ProfileCard';
import MenuTileGrid from '../../../components/Molucules/Tiles';
import RecentActivityCard from '../../../components/Molucules/recent-activity-card';

const HomeScreen = () => {
  const navigation = useNavigation();

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
    <SafeAreaView style={{padding: 16, flex: 1}}>
      <ProfileCard
        fullName="John Doe"
        houseNumber="NST Tower"
        appartmentNumber="105-A"
        mobileNumber="+1234567890"
        role="Owner"
      />

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.heading}>Quick Actions</Text>
        <MenuTileGrid data={menuData} columns={3} />
      </View>

      {/* Recent Activity */}
      <View style={styles.section}>
        <Text style={styles.heading}>Recent Activity</Text>
        <RecentActivityCard
          icon="bell-outline"
          title="Recent Activity"
          description="You have two new notices."
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold' as const,
    marginBottom: 8,
  },
};

export default HomeScreen;
