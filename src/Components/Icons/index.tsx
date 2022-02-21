import React from 'react';
import { memo } from 'react';
import { IconProps } from 'react-native-vector-icons/Icon';
import CustomIcon from '../../assets/icons/CustomIcon';
import { colorName, getColor } from '../../Utils/colors';
import { getIcon, IconName } from '../../Utils/icons';

interface Props extends IconProps {
    name: IconName;
    size?: number;
    color: colorName;
    onClick?: () => void;
}

const Icons = ({ name, size, color, onClick, ...rest }: Props) => (
    <CustomIcon
        name={getIcon(name)}
        size={size}
        color={getColor(color)}
        onPress={onClick}
        {...rest}
    />
);

export default memo(Icons);
