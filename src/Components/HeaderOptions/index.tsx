import React, { memo } from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../Utils/globalStyles';
import styles from './styles';

const HeaderOptions = () => {
    return (
        <View style={styles.container}>
            <View style={styles.camera}>
                <Text style={globalStyles.title}>icon</Text>
            </View>
            <View style={styles.optionsOrganization}>
                <Text style={globalStyles.title}>conversas</Text>
                <Text style={globalStyles.title}>status</Text>
                <Text style={globalStyles.title}>chamadas</Text>
            </View>
        </View>
    );
};
export default memo(HeaderOptions);
