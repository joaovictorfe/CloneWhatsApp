import React, { memo } from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './Routes';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent barStyle="light-content" />
            <Routes />
        </View>
    );
};
export default memo(App);
