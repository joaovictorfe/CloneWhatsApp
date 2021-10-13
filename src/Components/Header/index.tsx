import React, { memo } from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../Utils/globalStyles';
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={globalStyles.title}>WhatsApp</Text>
            <View style={styles.icons}>
                <Text style={globalStyles.title}>icon</Text>
                <Text style={globalStyles.title}>icon</Text>
            </View>
        </View>
    );
};
export default memo(Header);
