import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Status = () => {
    return (
        <View style={styles.container}>
            <Text>Status Component</Text>
        </View>
    );
};
export default memo(Status);
