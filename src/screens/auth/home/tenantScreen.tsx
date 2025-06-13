// screens/auth/tenantScreen.tsx
import React from 'react';
import {ScrollView} from 'react-native';
import TenantInfoCard from '../../../components/Molucules/TenantInfoCard';

const tenantData = {
  fullName: 'Rafiul Islam',
  mobileNumber: '+8801770001234',
  email: 'rafi@example.com',
  nidNumber: '1999123456789',
  rentAmount: '15000',
  rentStartDate: '2024-01-01',
  address: 'Flat 2B, NST Tower, Mirpur, Dhaka',
};

const TenantScreen = () => {
  return (
    <ScrollView contentContainerStyle={{padding: 16}}>
      <TenantInfoCard data={tenantData} />
    </ScrollView>
  );
};

export default TenantScreen;
