import React, {FC, useCallback} from 'react';
import {FlatList, Dimensions, StyleSheet} from 'react-native';
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

const MenuTileGrid: FC<MenuTileGridProps> = ({data, columns = 3}) => {
  const tileSpacing = 16;
  const screenWidth = Dimensions.get('window').width;
  const tileSize = (screenWidth - tileSpacing * (columns + 4)) / columns;

  const renderMenuTileItem = useCallback(
    ({item, index}: {item: MenuItem; index: number}) => (
      <MenuTileItem
        label={item.label}
        icon={item.icon}
        onPress={item.onPress}
        index={index}
        width={tileSize}
      />
    ),
    [tileSize],
  );

  return (
    <FlatList
      data={data}
      numColumns={columns}
      keyExtractor={item => item.id}
      renderItem={renderMenuTileItem}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={[styles.container]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 6,
    borderRadius: 12,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default MenuTileGrid;
