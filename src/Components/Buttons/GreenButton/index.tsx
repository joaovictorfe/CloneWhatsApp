import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type Props = {
    title: string;
    action: Function;
};

const GreenButton = ({ title, action }: Props) => {
    return (
        <TouchableOpacity onPress={() => action()} style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};
export default memo(GreenButton);
