import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileCard from '../../components/Molucules/ProfileCard';

const homeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, padding: 16}}>
      <ProfileCard
        fullName="John Doe"
        houseNumber="1234"
        mobileNumber="+1234567890"
      />
    </SafeAreaView>
  );
};

export default homeScreen;
