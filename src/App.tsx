import React, { memo } from 'react';
import { StatusBar, View } from 'react-native';
import Routes from './routes';
import { getColor } from './utils/colors';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor={getColor('lowDarkGreen')}
            />
            <Routes />
        </View>
    );
};
export default memo(App);
