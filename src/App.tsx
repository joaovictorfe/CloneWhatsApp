import { NavigationContainer } from '@react-navigation/native';
import React, { memo } from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './routes';

const App = () => {
    const children = () => {
        return (
            <>
                <View style={{ flex: 1 }}>
                    <StatusBar
                        translucent
                        barStyle="light-content"
                        backgroundColor="transparent"
                    />
                    <Routes />
                </View>
            </>
        );
    };

    return <NavigationContainer children={children()}></NavigationContainer>;
};
export default memo(App);
