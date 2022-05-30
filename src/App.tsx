import { NavigationContainer } from '@react-navigation/native';
import React, { memo, useEffect, useMemo } from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './Routes';
import { getColor } from './Utils/colors';

import { auth } from './config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            user => {
                console.log('atualizou o user:', user);
            },
            error => console.log('authstateChenge error:', error),
        );

        return unsubscribe;
    }, []);

    const children = useMemo(() => {
        console.log('mudou o user');
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: auth.currentUser
                        ? // ? getColor('headerBg')
                          '#0A1B23'
                        : getColor('headerBg'),
                    // : '#0A1B23',
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
    }, [auth.currentUser]);

    return <NavigationContainer children={children}></NavigationContainer>;
};
export default memo(App);
