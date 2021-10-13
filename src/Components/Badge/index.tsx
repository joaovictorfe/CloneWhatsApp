import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
    text: string;
};

const Badge = ({ text }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
        </View>
    );
};
export default memo(Badge);
