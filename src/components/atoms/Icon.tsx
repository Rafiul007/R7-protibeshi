import React, { FC } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextStyle } from 'react-native';

type IconType = 'Ionicons' | 'FontAwesome' | 'MaterialIcons';

interface IconProps {
  name: string;
  type?: IconType;
  size?: number;
  color?: string;
  style?: TextStyle;
}

const VIcon: FC<IconProps> = ({
  name,
  type = 'Ionicons',
  size = 24,
  color = '#000',
  style,
}) => {
  const getIconComponent = () => {
    switch (type) {
      case 'FontAwesome':
        return FontAwesome;
      case 'MaterialIcons':
        return MaterialIcons;
      case 'Ionicons':
      default:
        return Ionicons;
    }
  };

  const IconComponent = getIconComponent();

  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default VIcon;
