import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  onPress?: () => void;
}

interface MenuTileGridProps {
  data: MenuItem[];
  columns?: number;
}

const MenuTileGrid: React.FC<MenuTileGridProps> = ({data, columns = 3}) => {
  const tileSize = Dimensions.get('window').width / columns - 20;

  return (
    <FlatList
      data={data}
      numColumns={columns}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[styles.tile, {width: tileSize}]}
          onPress={item.onPress}>
          <Icon name={item.icon} size={32} color="#444" />
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  tile: {
    aspectRatio: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  label: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
  },
});

export default MenuTileGrid;
