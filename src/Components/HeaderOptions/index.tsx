import React, { memo } from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../Utils/globalStyles';
import Icons from '../Icons';
import styles from './styles';

const HeaderOptions = () => {
    return (
        <View style={styles.container}>
            <View style={styles.camera}>
                <Icons
                    name="camera"
                    size={28}
                    color="white"
                    style={{ marginHorizontal: -10, marginTop: 5 }}
                />
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
