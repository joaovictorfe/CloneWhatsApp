import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Chamadas = () => {
    return (
        <View style={styles.container}>
            <Text>Componente de chamadas</Text>
        </View>
    );
};
export default memo(Chamadas);
