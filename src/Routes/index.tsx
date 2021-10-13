import React, { memo } from 'react';
import Conversas from '../Pages/Conversas';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Conversas" component={Conversas} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default memo(Routes);
