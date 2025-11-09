/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Card, Icon} from 'react-native-paper';

interface RecentActivityCardProps {
  icon: string;
  title: string;
  description: string;
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card style={[styles.card, {backgroundColor: '#E3F2FD'}]} elevation={0}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon source={icon} size={28} color={'#62bcfcff'} />
        </View>

        {/* Text section */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#62bcfcff',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  description: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
});

export default RecentActivityCard;
