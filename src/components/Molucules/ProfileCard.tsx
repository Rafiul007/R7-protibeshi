import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Surface, useTheme} from 'react-native-paper';
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
  const {colors} = useTheme();

  return (
    <Surface
      style={[styles.card, {backgroundColor: colors.surface}]}
      elevation={1}>
      <View style={styles.topRow}>
        <VIcon
          name="person-circle-outline"
          type="Ionicons"
          size={28}
          color={colors.primary}
        />
        <Text
          variant="titleMedium"
          style={[styles.nameText, {color: colors.onSurface}]}>
          {fullName}
        </Text>
        <Text variant="labelMedium" style={{color: colors.onSurface}}>
          ({role})
        </Text>
      </View>

      <View style={styles.row}>
        <View style={styles.iconLabel}>
          <VIcon
            name="home-outline"
            type="Ionicons"
            size={20}
            color={colors.primary}
          />
          <Text style={[styles.label, {color: colors.onSurface}]}>
            Building Name
          </Text>
        </View>
        <Text style={[styles.value, {color: colors.onSurface}]}>
          {houseNumber}
        </Text>
      </View>

      <View style={styles.row}>
        <View style={styles.iconLabel}>
          <VIcon
            name="building"
            type="FontAwesome"
            size={18}
            color={colors.primary}
          />
          <Text style={[styles.label, {color: colors.onSurface}]}>
            Apartment No.
          </Text>
        </View>
        <Text style={[styles.value, {color: colors.onSurface}]}>
          {appartmentNumber}
        </Text>
      </View>

      <View style={styles.row}>
        <View style={styles.iconLabel}>
          <VIcon
            name="phone"
            type="MaterialIcons"
            size={20}
            color={colors.primary}
          />
          <Text style={[styles.label, {color: colors.onSurface}]}>
            Mobile Number
          </Text>
        </View>
        <Text style={[styles.value, {color: colors.onSurface}]}>
          {mobileNumber}
        </Text>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  nameText: {
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default ProfileCard;
