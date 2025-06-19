// components/Molecules/TenantInfoCard.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TenantInfoCardProps {
  data: Record<string, string>;
}

const labelIcons: Record<string, string> = {
  fullName: '🧑',
  mobileNumber: '📞',
  email: '✉️',
  nidNumber: '🆔',
  rentAmount: '💰',
  rentStartDate: '📅',
  address: '📍',
};

const labelNames: Record<string, string> = {
  fullName: 'Full Name',
  mobileNumber: 'Mobile',
  email: 'Email',
  nidNumber: 'NID',
  rentAmount: 'Rent',
  rentStartDate: 'Start Date',
  address: 'Address',
};

const TenantInfoCard: React.FC<TenantInfoCardProps> = ({data}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.header}>{data.fullName || 'Tenant Info'}</Text>

      {Object.entries(data).map(([key, value]) => {
        if (key === 'fullName') return null;

        return (
          <View key={key} style={styles.row}>
            <Text style={styles.label}>
              {labelIcons[key] || 'ℹ️'} {labelNames[key] || key}:
            </Text>
            <Text style={styles.value}>
              {key === 'rentAmount' ? `${value} BDT/month` : value}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    fontWeight: '600',
    color: '#555',
    width: 130,
  },
  value: {
    flex: 1,
    color: '#333',
  },
});

export default TenantInfoCard;
