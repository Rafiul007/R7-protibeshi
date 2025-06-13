import React from 'react';
import {FlatList, StyleSheet, Dimensions} from 'react-native';
import MenuTileItem from './tile-item';

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
      renderItem={({item, index}) => (
        <MenuTileItem
          label={item.label}
          icon={item.icon}
          onPress={item.onPress}
          index={index}
          width={tileSize}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default MenuTileGrid;
