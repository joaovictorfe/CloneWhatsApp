import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Camera = () => {
    return (
        <View style={styles.container}>
            <Text>Componente de Câmera</Text>
        </View>
    );
};
export default memo(Camera);
