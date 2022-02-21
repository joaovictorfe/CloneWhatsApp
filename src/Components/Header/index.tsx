import React, { memo } from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../Utils/globalStyles';
import Icons from '../Icons';
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={globalStyles.title}>WhatsApp</Text>
            <View style={styles.icons}>
                <Icons
                    name="search"
                    size={26}
                    color="white"
                    style={{ marginRight: 10 }}
                    onClick={() => console.log('clicou lupa')}
                />
                <Icons
                    name="threeDots"
                    size={26}
                    color="white"
                    onClick={() => console.log('clicou dots')}
                />
            </View>
        </View>
    );
};
export default memo(Header);
