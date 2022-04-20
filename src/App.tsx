import { NavigationContainer } from '@react-navigation/native';
import React, { memo } from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './Routes';
import { getColor } from './Utils/colors';

import { auth } from './config/firebase';

const App = () => {
    const children = () => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: auth.currentUser
                        ? getColor('headerBg')
                        : '#0A1B23',
                }}>
                <View
                    style={{
                        paddingTop: 40,
                    }}
                />
                <StatusBar translucent barStyle="light-content" />
                <Routes />
            </View>
        );
    };

    return <NavigationContainer children={children()}></NavigationContainer>;
};
export default memo(App);
