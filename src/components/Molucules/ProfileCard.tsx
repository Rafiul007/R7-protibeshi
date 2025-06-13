import React, {FC} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import VIcon from '../atoms/Icon';

interface ProfileCardProps {
  fullName: string;
  houseNumber: string;
  mobileNumber: string;
  role: string;
  appartmentNumber: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
  fullName,
  houseNumber,
  mobileNumber,
  role,
  appartmentNumber,
}) => {
  return (
    <LinearGradient
      colors={['#2a9d8f', '#1e7c71']}
      style={styles.card}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.topRow}>
        <VIcon
          name="person-circle-outline"
          type="Ionicons"
          size={28}
          color="#fff"
        />
        <Text style={styles.nameText}>{fullName}</Text>
        <Text style={styles.nameText}>({role})</Text>
      </View>

      <View style={styles.middleRow}>
        <Text style={styles.label}>House No</Text>
        <Text style={styles.value}>{houseNumber}</Text>
      </View>
      <View style={styles.middleRow}>
        <Text style={styles.label}>Appartment No</Text>
        <Text style={styles.value}>{appartmentNumber}</Text>
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.iconLabel}>
          <VIcon name="phone" type="MaterialIcons" size={20} color="#fff" />
          <Text style={styles.label}>Mobile</Text>
        </View>
        <Text style={styles.value}>{mobileNumber}</Text>
      </View>
    </LinearGradient>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
    alignSelf: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  nameText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#dff',
    fontSize: 14,
    marginLeft: 6,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProfileCard;
