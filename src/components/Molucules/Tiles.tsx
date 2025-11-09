import React, {FC, useCallback} from 'react';
import {FlatList, Dimensions, StyleSheet} from 'react-native';
import MenuTileItem from './tile-item';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  onPress?: () => void;
  notificationCount?: number; // ✅ support badge
}

interface MenuTileGridProps {
  data: MenuItem[];
  columns?: number;
}

const MenuTileGrid: FC<MenuTileGridProps> = ({data, columns = 2}) => {
  const spacing = 16;
  const screenWidth = Dimensions.get('window').width;

  const tileWidth = (screenWidth - spacing * (columns + 1)) / columns;

  const renderMenuTileItem = useCallback(
    ({item, index}: {item: MenuItem; index: number}) => (
      <MenuTileItem
        label={item.label}
        icon={item.icon}
        onPress={item.onPress}
        index={index}
        width={tileWidth}
        notificationCount={item.notificationCount}
      />
    ),
    [tileWidth],
  );

  return (
    <FlatList
      data={data}
      numColumns={columns}
      keyExtractor={item => item.id}
      renderItem={renderMenuTileItem}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 0,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default MenuTileGrid;
