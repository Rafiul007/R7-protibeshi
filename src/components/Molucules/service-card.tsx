/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, TouchableRipple, useTheme, Icon} from 'react-native-paper';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  onPress?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  onPress,
}) => {
  const {colors} = useTheme();

  return (
    <TouchableRipple onPress={onPress} borderless style={{borderRadius: 12}}>
      <Card style={[styles.card, {borderColor: colors.primary}]}>
        <View style={styles.container}>
          {/* Left Icon */}
          <Icon source={icon} size={28} color={colors.primary} />

          {/* Title + Description */}
          <View style={styles.textBox}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>

          {/* Right Arrow Icon */}
          <Icon source="chevron-right" size={26} color={colors.onSurface} />
        </View>
      </Card>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginVertical: 6,
    padding: 14,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBox: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  description: {
    fontSize: 13,
    color: 'gray',
    marginTop: 2,
  },
});

export default ServiceCard;
