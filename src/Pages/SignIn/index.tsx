import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Text>SignIn</Text>
        </View>
    );
};
export default memo(SignIn);
